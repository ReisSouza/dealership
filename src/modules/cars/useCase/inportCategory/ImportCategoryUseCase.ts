import { Express } from 'express';

import { IImportCategoriesDTO, IImportRepository } from '@modules/cars/repositories/IImportCategoriesDTO';
import { parse as csvParse } from 'csv-parse';
import fs from 'fs';

import { AppError } from '@shared/Util/AppError/AppError';

export class ImportCategoryUseCase {
  constructor(private categoriesRespositories: IImportRepository) {}

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
          resolve(categories);
        })
        .on('error', (err) => {
          reject(err);
        });
    });
  }

  async execute(file: Express.Multer.File) {
    const categories = await this.loadingCategories(file);

    const { categoriesAlreadyExists } = await this.categoriesRespositories.categoriesAlreadyExists(categories);

    if (categoriesAlreadyExists) {
      throw new AppError('Categories already exist');
    }
    const rest = await this.categoriesRespositories.createCategories(categories);

    return rest;
  }
}
