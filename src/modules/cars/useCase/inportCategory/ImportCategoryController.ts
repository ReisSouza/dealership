import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

export class ImportCategoryController {
  constructor(private importCategoryUseCase: ImportCategoryUseCase) {}
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    const res = await this.importCategoryUseCase.execute(file);

    return response.status(201).json(res);
  }
}
