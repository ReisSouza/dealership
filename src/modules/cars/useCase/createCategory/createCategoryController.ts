import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './createCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const res = await this.createCategoryUseCase.execute({ description, name });

    return response.status(201).json(res);
  }
}
