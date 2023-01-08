/* eslint-disable max-len */
// import { ListCategoriesRepository } from '@modules/cars/repositories/implementations/ListCategoriesRepository';
import { CategoriesRepository } from '@modules/cars/repositories/implementations/CategoriesRepository';
// import { PostegressListCategoriesRepository } from '@modules/cars/repositories/implementations/PostgressListCategoriesRepositoy';

import { ListCategoriesController } from './listCategoriesController';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

const postegressListCategoriesRepository = CategoriesRepository.getInstance();
// const listCategoriesRepository = new ListCategoriesRepository();

const listCategoriesUseCase = new ListCategoriesUseCase(postegressListCategoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
