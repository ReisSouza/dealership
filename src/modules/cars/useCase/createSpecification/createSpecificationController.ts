import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './createSpecificationUseCase';

export class CreateSpecificationController {
  async handle(request: Request, response: Response) {
    const createSpecificationUseCase = new CreateSpecificationUseCase();

    const res = await createSpecificationUseCase.execute();

    return response.json(res);
  }
}
