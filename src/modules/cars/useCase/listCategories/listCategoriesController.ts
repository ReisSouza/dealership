/* eslint-disable max-len */
import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './listCategoriesUseCase';

export class ListCategoriesController {
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) {}
  async handle(request: Request, response: Response) {
    const { page, limit } = request.body;

    const categories = await this.listCategoriesUseCase.execute({ limit, page });

    return response.json(categories);
  }
}
