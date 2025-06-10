import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  async listar() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
      },
    });
  }

  async criar(data: any) {
    return this.prisma.sessao.create({
      data: {
        filmeId: data.filmeId,
        salaId: data.salaId,
        dataHora: new Date(data.dataHora),
        preco: data.preco,
        idioma: data.idioma,
        formato: data.formato,
      },
    });
  }
}