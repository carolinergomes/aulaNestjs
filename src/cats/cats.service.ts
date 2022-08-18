import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { CreateCatDto } from './dto/cats.dto';
import { CreateCat } from './entity/create.cat';

@Injectable()
export class CatsService {
  private cats: CreateCatDto[] = [];

  constructor(
    @Inject('CATS_REPOSITORY')
    private catsRepository: Repository<CreateCat>,
  ) {}

  create(cat: CreateCat) {
    // inserir no banco de dados usando o repository
    // this.cats.push(cat);
    this.catsRepository.create(cat);
  }

  async findAll(): Promise<CreateCat[]> {
    // busca os elementos do bd
    return this.catsRepository.find();
  }

  findOne(id: number) {
    const cat = this.cats.filter((value) => value.id === id);
    return cat; // filter, map
  }

  remove(id: number) {
    const cats_remove = this.cats.filter((value) => value.id !== id);
    this.cats = cats_remove;
  }

  update(createCatDto: CreateCatDto, id: number) {
    const cat = this.findOne(createCatDto.id);

  }
}