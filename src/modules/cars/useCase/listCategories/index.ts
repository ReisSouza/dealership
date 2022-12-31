/* eslint-disable max-len */
import { PostegressListCategoriesRepository } from '@modules/cars/repositories/implementations/PostgressListCategoriesRepositoy';

import { ListCategoriesController } from './listCategoriesController';
import { ListCategoriesUseCase } from './listCategoriesUseCase';

const postegressListCategoriesRepository = new PostegressListCategoriesRepository();

const listCategoriesUseCase = new ListCategoriesUseCase(postegressListCategoriesRepository);

const listCategoriesController = new ListCategoriesController(listCategoriesUseCase);

export { listCategoriesController };
