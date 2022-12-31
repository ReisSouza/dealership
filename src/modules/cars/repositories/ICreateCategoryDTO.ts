import { Category } from '@modules/cars/model/Category';

export interface IFindIsExistsCategoryDTO {
  name: string;
}

export interface ICreateCategoryDTO {
  name: string;
  description: string;
}

export interface ICategoriesRepository {
  findIsExistCategory({ name }: IFindIsExistsCategoryDTO): Promise<boolean>;
  createCategory({ name, description }: ICreateCategoryDTO): Promise<{
    data: Category;
  }>;
}
