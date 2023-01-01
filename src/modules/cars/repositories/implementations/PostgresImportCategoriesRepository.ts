import { prisma } from '@database/prismaClient';
// import { Category } from '@modules/cars/model/Category';

import { IImportCategoriesDTO, IImportRepository } from '../IImportCategoriesDTO';

class PostgressInpotCategoriesRepository implements IImportRepository {
  async categoriesAlreadyExists(_category: IImportCategoriesDTO[]) {
    const allCategories = await prisma.categories.findMany();
    const categoriesAlreadyExists: IImportCategoriesDTO[] = [];
    _category.map((categoryInitial) => {
      const res = allCategories.find((category) => category.name === categoryInitial.name);
      return res !== undefined && categoriesAlreadyExists.push(res);
    });
    const res = {
      categoriesAlreadyExists: categoriesAlreadyExists.length,
      data: categoriesAlreadyExists,
    };
    return res;
  }

  async createCategories(_category: IImportCategoriesDTO[]) {
    await prisma.categories.createMany({
      data: _category,
    });
    return {
      data: _category,
    };
  }
}

export { PostgressInpotCategoriesRepository };
