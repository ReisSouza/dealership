/* eslint-disable max-len */
import { Router } from 'express';

import { CreateSpecificationController } from '@modules/cars/useCase/createSpecification/createSpecificationController';

const specificationRoutes = Router();

const createSpecificationController = new CreateSpecificationController();

specificationRoutes.post('/', createSpecificationController.handle);

export { specificationRoutes };
