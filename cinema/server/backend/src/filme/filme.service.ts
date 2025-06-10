// filme.service.ts

import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class FilmeService {
  constructor(private prisma: PrismaService) {}

  async criarFilme(data: any) {
    // Converte a data estreia para Date (ISO 8601)
    const estreiaDate = new Date(data.estreia);

    // Validação simples
    if (isNaN(estreiaDate.getTime())) {
      throw new Error('Data de estreia inválida');
    }

    const filme = await this.prisma.filme.create({
      data: {
        titulo: data.titulo,
        descricao: data.descricao,
        genero: data.genero,
        classificacao: data.classificacao,
        duracao: Number(data.duracao),
        estreia: estreiaDate, // aqui passa Date válido
        imagem: data.imagem,
      },
    });
    

    return filme;
  }
    async listarFilmes() {
    return await this.prisma.filme.findMany();
  }
}
