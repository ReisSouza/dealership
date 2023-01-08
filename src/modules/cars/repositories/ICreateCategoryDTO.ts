import { Category } from '@modules/cars/model/Category';

export interface IFindIsExistsCategoryDTO {
  name: string;
}

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export type ListAllCategoriesArgsDTO = {
  limit?: number;
  page?: number;
};

export interface ICategoriesRepository {
  findIsExistCategory({ name }: IFindIsExistsCategoryDTO):Promise<boolean>;
  createCategory({ name, description }: ICreateCategoryDTO): Promise<{
    data: Category;
  }>;
  findWithPagination({ limit, page }: ListAllCategoriesArgsDTO): Promise<{
    data: Category[];
    meta: {
      page: number;
      limit: number;
      total: number;
    };
  }>;
}
