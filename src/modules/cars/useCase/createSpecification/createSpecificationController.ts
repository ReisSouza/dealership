import { Request, Response } from 'express';

import { CreateSpecificationUseCase } from './createSpecificationUseCase';

export class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.body;

    const res = await this.createSpecificationUseCase.execute({ description, name });

    return response.status(201).json(res);
  }
}
