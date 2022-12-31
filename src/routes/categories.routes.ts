import { Router } from 'express';

import { createCategoryController } from '@modules/cars/useCase/createCategory';
import { listCategoriesController } from '@modules/cars/useCase/listCategories';

const caregoriesRoutes = Router();

caregoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

caregoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response));

export { caregoriesRoutes };
