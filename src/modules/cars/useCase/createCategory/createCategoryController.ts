/* eslint-disable max-len */
import { Request, Response } from 'express';

// import { PostgressCategoriesRepository } from '@modules/cars/repositories/implementations/PostgresCreateCategoryRepository';

import { CreateCategoryUseCase } from './createCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    // const createCategoryRepository = new PostgressCategoriesRepository();

    // const createCategoryUseCase = new CreateCategoryUseCase(createCategoryRepository);

    const res = await this.createCategoryUseCase.execute({ description, name });

    return response.status(201).json(res);
  }
}
