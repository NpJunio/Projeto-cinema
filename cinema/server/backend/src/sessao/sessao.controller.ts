// sessao.controller.ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { SessaoService } from './sessao.service';

@Controller('sessoes')
export class SessaoController {
  constructor(private readonly sessaoService: SessaoService) {}

  @Get()
  async listar() {
    return this.sessaoService.listar();
  }

  @Post()
  async criar(@Body() data: any) {
    return this.sessaoService.criar(data);
  }
}
