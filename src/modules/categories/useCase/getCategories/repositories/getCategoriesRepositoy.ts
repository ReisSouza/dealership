import { prisma } from '@database/prismaClient';

import { LIMIT_PAGE_DEFAULT } from '@shared/Env';

import { GetAllCategoriesArgsDTO } from './IGetCategpriesRepositoryDTO';

export class GetCategoriesRepository {
  async findALlWithPagination({ limit = LIMIT_PAGE_DEFAULT, page = 0 }: GetAllCategoriesArgsDTO) {
    const allCategories = await prisma.categories.findMany({
      skip: limit * page,
      take: limit,
      orderBy: {
        created_at: 'desc',
      },
    });
    const countCategories = await prisma.categories.count();

    return {
      data: allCategories,
      meta: {
        page,
        limit,
        total: countCategories,
      },
    };
  }
}
