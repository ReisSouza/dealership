/* eslint-disable max-len */
import { PostgressCategoriesRepository } from '@modules/cars/repositories/implementations/PostgresCreateCategoryRepository';

import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryUseCase } from './createCategoryUseCase';

const createCategoryRepository = new PostgressCategoriesRepository();

const createCategoryUseCase = new CreateCategoryUseCase(createCategoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
