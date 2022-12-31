import { prisma } from '@database/prismaClient';
import { Category } from '@modules/cars/model/Category';

import { ICategoriesRepository, ICreateCategoryDTO, IFindIsExistsCategoryDTO } from '../ICreateCategoryDTO';

class PostgressCategoriesRepository implements ICategoriesRepository {
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

  async createCategory({ description, name }: ICreateCategoryDTO) {
    const data = new Category();

    Object.assign(data, {
      name,
      description,
      created_at: new Date(),
    });

    const category = await prisma.categories.create({
      data,
    });
    return {
      data: category,
    };
  }
}

export { PostgressCategoriesRepository };
