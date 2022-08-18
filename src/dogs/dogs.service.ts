import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateDogDto } from './dto/dogs.dto';
import { CreateDog } from './entity/create.dog';

@Injectable()
export class DogsService {
  private dogs: CreateDogDto[] = [];

  constructor(
    @Inject('DOGS_REPOSITORY')
    private dogsRepository: Repository<CreateDog>,
  ) {}

  create(dog: CreateDog) {
    // inserir no banco de dados usando o repository
    // this.cats.push(cat);
    this.dogsRepository.create(dog);
  }

  async findAll(): Promise<CreateDog[]> {
    // busca os elementos do bd
    return this.dogsRepository.find();
  }

  findOne(id: number) {
    const dog = this.dogs.filter((value) => value.id === id);
    return dog; // filter, map
  }

  remove(id: number) {
    const dogs_remove = this.dogs.filter((value) => value.id !== id);
    this.dogs = dogs_remove;
  }

  update(createDogDto: CreateDogDto, id: number) {
    const dog = this.findOne(createDogDto.id);

  }
}