import { PostgressInpotCategoriesRepository } from '@modules/cars/repositories/implementations/PostgresImportCategoriesRepository';

import { ImportCategoryController } from './ImportCategoryController';
import { ImportCategoryUseCase } from './ImportCategoryUseCase';

const importRepositories = new PostgressInpotCategoriesRepository();

const importCategoryUseCase = new ImportCategoryUseCase(importRepositories);

const importCategoryController = new ImportCategoryController(importCategoryUseCase);

export { importCategoryController };
