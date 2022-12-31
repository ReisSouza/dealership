import { Router } from 'express';

import { caregoriesRoutes } from './categories.routes';
import { specificationRoutes } from './specification.routes';

const router = Router();

router.use('/categories', caregoriesRoutes);

router.use('/specification', specificationRoutes);

export { router };
