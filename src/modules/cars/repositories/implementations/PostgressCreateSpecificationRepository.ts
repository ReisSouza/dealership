import { prisma } from '@database/prismaClient';
import { Specification } from '@modules/cars/model/Specification';

import { IFindIsExistsCategoryDTO } from '../ICreateCategoryDTO';
import { ICreateSpecificationDTO, ISpecificationRepository } from '../ICreateSpecificationDTO';

class PostgressSpecificationRepository implements ISpecificationRepository {
  async findIsExistSpecification({ name }: IFindIsExistsCategoryDTO) {
    const categoriesCaount = await prisma.specification.count({
      where: {
        name: {
          equals: name,
        },
      },
    });
    return categoriesCaount > 0;
  }

  async createSpecification({ description, name }: ICreateSpecificationDTO) {
    const data = new Specification();

    Object.assign(data, {
      name,
      description,
      created_at: new Date(),
    });

    const specification = await prisma.specification.create({
      data,
    });
    return {
      data: specification,
    };
  }
}

export { PostgressSpecificationRepository };
