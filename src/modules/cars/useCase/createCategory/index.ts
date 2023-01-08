/* eslint-disable max-len */
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';
// import { PostgressCategoriesRepository } from '@modules/cars/repositories/implementations/PostgresCreateCategoryRepository';

import { CreateCategoryController } from './createCategoryController';
import { CreateCategoryUseCase } from './createCategoryUseCase';

const createCategoryRepository = CategoriesRepository.getInstance();

const createCategoryUseCase = new CreateCategoryUseCase(createCategoryRepository);

const createCategoryController = new CreateCategoryController(createCategoryUseCase);

export { createCategoryController };
