/* eslint-disable max-len */
/* eslint-disable no-use-before-define */
import { Category } from '@modules/cars/model/Category';

import { LIMIT_PAGE_DEFAULT } from '@shared/Env';

import { ICategoriesRepository, ICreateCategoryDTO, ListAllCategoriesArgsDTO } from '../ICreateCategoryDTO';
import { IFindIsExistsCategoryDTO } from '../IImportCategoriesDTO';

class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  findIsExistCategory({ name }: IFindIsExistsCategoryDTO):Promise<boolean> {
    const categoryAlreadExist = this.categories.some((category) => category.name === name);
    return new Promise((resolve) => {
      resolve(categoryAlreadExist);
    });
  }

  createCategory({ description, name }: ICreateCategoryDTO):Promise<{data:Category}> {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
    });

    this.categories.push(category);

    return new Promise((resolve) => {
      resolve({ data: category });
    });
  }
  findWithPagination({ limit = LIMIT_PAGE_DEFAULT, page = 0 }: ListAllCategoriesArgsDTO): Promise<{ data: Category[]; meta: { page: number; limit: number; total: number; }; }> {
    return new Promise((resolve) => {
      resolve({
        data: this.categories,
        meta: {
          page,
          limit,
          total: this.categories.length,
        },
      });
    });
  }
}

export { CategoriesRepository };
