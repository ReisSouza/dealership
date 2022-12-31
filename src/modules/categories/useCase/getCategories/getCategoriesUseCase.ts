import { GetCategoriesRepository } from './repositories/getCategoriesRepositoy';

interface IGetCategoriesUseCaseArgs {
  page?: number;
  limit?: number;
}
export class GetCategoriesUseCase {
  async execute({ limit, page }: IGetCategoriesUseCaseArgs) {
    const getCategoriesRepository = new GetCategoriesRepository();

    const categories = await getCategoriesRepository.findALlWithPagination({ limit, page });

    return categories;
  }
}
