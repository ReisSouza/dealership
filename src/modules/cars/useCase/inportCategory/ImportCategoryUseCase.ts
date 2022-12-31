import { Express } from 'express';

export class ImportCategoryUseCase {
  async execute(file: Express.Multer.File | undefined) {
    return {
      file,
    };
  }
}
