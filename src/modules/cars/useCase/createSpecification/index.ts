/* eslint-disable max-len */

import { PostgressSpecificationRepository } from '@modules/cars/repositories/implementations/PostgressCreateSpecificationRepository';

import { CreateSpecificationController } from './createSpecificationController';
import { CreateSpecificationUseCase } from './createSpecificationUseCase';

const createSpecificationRepository = new PostgressSpecificationRepository();

const createSpecificationUseCase = new CreateSpecificationUseCase(createSpecificationRepository);

const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase);

export { createSpecificationController };
