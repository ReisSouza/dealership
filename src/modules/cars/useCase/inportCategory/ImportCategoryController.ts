import { Request, Response } from 'express';

import { AppError } from '@shared/Util/AppError/AppError';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    if (file === undefined) {
      throw new AppError('File not found');
    }
    const res = await this.importCategoryUseCase.execute(file);

    return response.status(201).json(res);
  }
}
