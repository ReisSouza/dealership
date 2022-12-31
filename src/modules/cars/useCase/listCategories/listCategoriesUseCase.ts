import { IListCategoriesRepository } from '@modules/cars/repositories/IListCategpriesRepositoryDTO';

interface IRequest {
  page?: number;
  limit?: number;
}
export class ListCategoriesUseCase {
  constructor(private postegressGetCategoriesRepository: IListCategoriesRepository) {}
  async execute({ limit, page }: IRequest) {
    const categories = await this.postegressGetCategoriesRepository.findWithPagination({ limit, page });

    return categories;
  }
}
