import { CreateCategoryRepository } from '@modules/categories/useCase/createCategory/repositories/CategoriesRepository';
import { Category } from 'model/Category';

import { AppError } from '@shared/Util/AppError/AppError';

export class CreateCategoryUseCase {
  async execute({ description, name }: Omit<Category, 'created_at'>) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date(),
    });
    const createCategoryRepository = new CreateCategoryRepository();

    const categoryAlreadyExists = await createCategoryRepository.findIsExistCategory({ name });

    if (categoryAlreadyExists) {
      throw new AppError('Category already exists');
    }

    const categoryResponse = await createCategoryRepository.createCategory(category);

    return {
      data: categoryResponse,
    };
  }
}
