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

  
  @Controller('dogs')
  export class DogsController {
    constructor(private dogsService: DogsService) {}
  
    @Get()
    findAll(): CreateDogDto[] {
      return this.dogsService.findAll();
    }
  
    @Get(':id')
    getOne(@Param() params): string {
      return `encontrei o dog com id ${params.id}`;
    }
  
    @Get('find/:id')
    findOneMore(@Param('id') id: number): string {
      return `encontrei um outro dog com id ${id}`;
    }
  
    @Post()
    async create(@Body() createDogDto: CreateDogDto) {
      await this.dogsService.create(createDogDto);
    }
  
    @Put(':id')
    update(@Param('id') id: number, @Body() updateDog: CreateDogDto): string {
      return 'update dogs';
    }
  
    @Delete(':id')
    delete(@Param('id') id: number): string {
      return 'delete dog';
    }
  }