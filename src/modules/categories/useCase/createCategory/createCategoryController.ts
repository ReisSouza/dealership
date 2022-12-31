import { Request, Response } from 'express';

import { CreateCategoryUseCase } from './createCategoryUseCase';

export class CreateCategoryController {
  async handle(request: Request, response: Response) {
    const { name, description } = request.body;

    const createCorseUseCase = new CreateCategoryUseCase();

    const res = await createCorseUseCase.execute({ description, name });

    return response.json(res);
  }
}
