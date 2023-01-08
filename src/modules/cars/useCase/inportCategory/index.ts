import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';
// import { PostgressInpotCategoriesRepository } from '@modules/cars/repositories/implementations/PostgresImportCategoriesRepository';

import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const importRepositories = CategoriesRepository.getInstance();

const importCategoryUseCase = new ImportCategoryUseCase(importRepositories);

const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
