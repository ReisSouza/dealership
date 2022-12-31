import { Router } from 'express';

import { CreateCategoryController } from '@modules/categories/useCase/createCategory/createCategoryController';
import { GetCategoriesController } from '@modules/categories/useCase/getCategories/getCategoriesController';

const caregoriesRoutes = Router();

const createCategoryController = new CreateCategoryController();

const getCategoriesController = new GetCategoriesController();

caregoriesRoutes.post('/', createCategoryController.handle);
caregoriesRoutes.get('/', getCategoriesController.handle);

export { caregoriesRoutes };
