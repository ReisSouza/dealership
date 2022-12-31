import { Router } from 'express';

import { createCategoryController } from '@modules/cars/useCase/createCategory';
import { importCategoryController } from '@modules/cars/useCase/inportCategory';
import { listCategoriesController } from '@modules/cars/useCase/listCategories';
import multer from 'multer';

const caregoriesRoutes = Router();

const upload = multer({
  dest: './tmp',
});

caregoriesRoutes.post('/', (request, response) => createCategoryController.handle(request, response));

caregoriesRoutes.get('/', (request, response) => listCategoriesController.handle(request, response));

caregoriesRoutes.post('/import', upload.single('file'), (request, response) => importCategoryController.handle(request, response));

export { caregoriesRoutes };
