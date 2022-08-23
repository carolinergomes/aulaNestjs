import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { DogsService } from './dogs.service';
import { DogDto } from './dto/dogs.dto';
import { Dog } from './entity/create.dog';


@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get('find')
  findAll(): Promise<Dog[]> {
    return this.dogsService.findAll();
  }

  @Get(':id')
  getOne(@Param() params): string {
    return `encontrei um dog${params.id}`;
  }

  @Get('find/:id')
  findOneMore(@Param('id') id: number) {
    return this.dogsService.findOne(id);
  }

  @Post('create')
  async create(@Body() createDog: Dog) {
    this.dogsService.create(createDog);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDog: DogDto) {
    this.dogsService.update(updateDog, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return 'delete dog';
  }
}