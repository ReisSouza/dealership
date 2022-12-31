import { AppError } from '@shared/Util/AppError/AppError';

import { ICategoriesRepository } from '../../repositories/ICreateCategoryDTO';

interface IRequest {
  name: string;
  description: string;
}
export class CreateCategoryUseCase {
  constructor(private createCategoryRepository: ICategoriesRepository) {}

  async execute({ description, name }: IRequest) {
    const categoryAlreadyExists = await this.createCategoryRepository.findIsExistCategory({ name });

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    const categoryResponse = await this.createCategoryRepository.createCategory({ description, name });

    return categoryResponse;
  }
}
