import { Express } from 'express';

import { ICategoriesRepository } from '@modules/cars/repositories/ICreateCategoryDTO';
import { IImportCategoriesDTO } from '@modules/cars/repositories/IImportCategoriesDTO';
import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

export class ImportCategoryUseCase {
  constructor(private categoriesRespositories: ICategoriesRepository) {}

  async loadingCategories(file: Express.Multer.File): Promise<IImportCategoriesDTO[]> {
    return new Promise((resolve, reject) => {
      const categories: IImportCategoriesDTO[] = [];

      const stream = fs.createReadStream(file.path);

      const parserFile = csvParse();

      stream.pipe(parserFile);

      parserFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({
            name,
            description,
          });
        })
        .on('end', () => {
          fs.promises.unlink(file.path);
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadingCategories(file);
    console.log(categories);

    categories.map(async (category) => {
      const { description, name } = category;
      const existCategory = await this.categoriesRespositories.findIsExistCategory({ name });
      if (!existCategory) {
        this.categoriesRespositories.createCategory({
          description,
          name,
        });
      }
    });
  }
}
