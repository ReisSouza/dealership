import { ISpecificationRepository } from '@modules/cars/repositories/ICreateSpecificationDTO';

import { AppError } from '@shared/Util/AppError/AppError';

interface IRequest {
  name: string;
  description: string;
}
export class CreateSpecificationUseCase {
  constructor(private createSpecificationRepository: ISpecificationRepository) {}

  async execute({ description, name }: IRequest) {
    const SpecificationAlreadyExists = await this.createSpecificationRepository.findIsExistSpecification({ name });

    if (SpecificationAlreadyExists) {
      throw new AppError('Specification already exists');
    }

    const SpecificationResponse = await this.createSpecificationRepository.createSpecification({ description, name });

    return SpecificationResponse;
  }
}
