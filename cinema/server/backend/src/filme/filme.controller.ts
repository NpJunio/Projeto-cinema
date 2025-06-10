import { Body, Controller, Post, Get } from '@nestjs/common';
import { FilmeService } from './filme.service';

@Controller('filmes')
export class FilmeController {
  constructor(private readonly filmeService: FilmeService) {}

  @Post()
  async criar(@Body() body: any) {
    return this.filmeService.criarFilme(body);
  }

  @Get()
  async getFilmes() {
    return this.filmeService.listarFilmes();
  }
}
