// import { Category } from '../model/Category';

export interface IFindIsExistsCategoryDTO {
  name: string;
}

export interface IImportCategoriesDTO {
  name: string;
  description: string;
}

export interface IImportRepository {
  categoriesAlreadyExists(categories: IImportCategoriesDTO[]): Promise<{
    categoriesAlreadyExists: number;
    data: IImportCategoriesDTO[];
  }>;
  createCategories(categories: IImportCategoriesDTO[]): Promise<{
    data: any;
  }>;
}
