import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { IngressoService } from './ingresso.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';

@Controller('ingressos')
export class IngressoController {
  constructor(private readonly ingressoService: IngressoService) {}

  @Post()
  create(@Body() createIngressoDto: CreateIngressoDto) {
    return this.ingressoService.create(createIngressoDto);
  }

  @Get()
  findAll() {
    return this.ingressoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ingressoService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ingressoService.remove(+id);
  }
}
