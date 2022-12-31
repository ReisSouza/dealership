import { prisma } from '@database/prismaClient';

import { LIMIT_PAGE_DEFAULT } from '@shared/Env';

import { ListAllCategoriesArgsDTO } from '../IListCategpriesRepositoryDTO';

export class PostegressListCategoriesRepository {
  async findWithPagination({ limit = LIMIT_PAGE_DEFAULT, page = 0 }: ListAllCategoriesArgsDTO) {
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
