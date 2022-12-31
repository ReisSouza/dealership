import { Category } from '@modules/cars/model/Category';

export type ListAllCategoriesArgsDTO = {
  limit?: number;
  page?: number;
};
export interface IListCategoriesRepository {
  findWithPagination({ limit, page }: ListAllCategoriesArgsDTO): Promise<{
    data: Category[];
    meta: {
      page: number;
      limit: number;
      total: number;
    };
  }>;
}
