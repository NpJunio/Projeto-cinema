import { Controller, Post, Get, Body } from '@nestjs/common';
import { SalaService } from './sala.service';
import { CreateSalaDto } from './dto/create-sala.dto';

@Controller('salas')
export class SalaController {
  constructor(private readonly salasService: SalaService) {}

  @Post()
  create(@Body() createSalaDto: CreateSalaDto) {
    return this.salasService.create(createSalaDto);
  }

  @Get()
  findAll() {
    return this.salasService.findAll();
  }
}
