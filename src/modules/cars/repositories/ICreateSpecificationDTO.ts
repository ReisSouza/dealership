import { Category } from '@modules/cars/model/Category';

export interface IFindIsExistsSpecificationDTO {
  name: string;
}

export interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

export interface ISpecificationRepository {
  findIsExistSpecification({ name }: IFindIsExistsSpecificationDTO): Promise<boolean>;
  createSpecification({ name, description }: ICreateSpecificationDTO): Promise<{
    data: Category;
  }>;
}
