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
import { CreateDogDto } from './dto/dogs.dto';
import { CreateDog } from './entity/create.dog';


@Controller('dogs')
export class DogsController {
  constructor(private dogsService: DogsService) {}

  @Get()
  findAll(): Promise<CreateDog[]> {
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

  @Post()
  async create(@Body() createDog: CreateDog) {
    this.dogsService.create(createDog);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updateDog: CreateDogDto) {
    this.dogsService.update(updateDog, id);
  }

  @Delete(':id')
  delete(@Param('id') id: number): string {
    return 'delete dog';
  }
}