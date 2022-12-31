import { prisma } from '@database/prismaClient';

import { ICreateCategoryDTO, IFindIsExistsCategoryDTO } from './ICreateCategoryDTO';

export class CreateCategoryRepository {
  async findIsExistCategory({ name }: IFindIsExistsCategoryDTO) {
    const categoriesCaount = await prisma.categories.count({
      where: {
        name: {
          equals: name,
        },
      },
    });
    return categoriesCaount > 0;
  }

  async createCategory(data: ICreateCategoryDTO) {
    const category = await prisma.categories.create({
      data,
    });
    return {
      data: category,
    };
  }
}
