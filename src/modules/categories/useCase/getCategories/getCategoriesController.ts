import { Request, Response } from 'express';

import { GetCategoriesUseCase } from './getCategoriesUseCase';

export class GetCategoriesController {
  async handle(request: Request, response: Response) {
    const getCategoriesUseCase = new GetCategoriesUseCase();

    const { page, limit } = request.body;

    const categories = await getCategoriesUseCase.execute({ limit, page });

    return response.json(categories);
  }
}
