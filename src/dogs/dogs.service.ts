import { Injectable } from '@nestjs/common';
import { CreateDogDto } from './dto/dogs.dto';

@Injectable()
export class DogsService {
  private readonly dogs: CreateDogDto[] = [];

  create(dog: CreateDogDto) {
    // inserir no bd usando o repository
    this.dogs.push(dog);
  }

  findAll(): CreateDogDto[] {
    // busca tudo no bd
    return this.dogs;
  }
}
