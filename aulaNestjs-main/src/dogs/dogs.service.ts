import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { DogDto } from './dto/dogs.dto';
import { Dog } from './entity/create.dog';

@Injectable()
export class DogsService {
  private dogs: DogDto[] = [];

  constructor(
    @Inject('DOGS_REPOSITORY')
    private dogsRepository: Repository<Dog>,
  ) {}

  create(dog: Dog) {
    // inserir no banco de dados usando o repository
    // this.cats.push(dog);
    this.dogsRepository.create(dog);
  }

  async findAll(): Promise<Dog[]> {
    // busca os elementos do bd
    return this.dogsRepository.find();
  }

  async findOne(id: string): Promise<Dog> {
    // const dog = this.dogs.filter((value) => value.id === id);
    return await this.dogsRepository.findOneBy({ id });
  }

  async remove(id: string) {
    // const dogs_remove = this.dogs.filter((value) => value.id !== id);
    // this.dogs = dogs_remove;
    return await this.dogsRepository.delete(id);
  }

  //atualizar na lista
  async update(DogToUpdate: DogDto, id: string): Promise<Dog> {
    const dog = await this.dogsRepository.findOneBy({ id });
    const updated = Object.assign(DogToUpdate, dog);

    return await this.dogsRepository.save(updated);
}
}