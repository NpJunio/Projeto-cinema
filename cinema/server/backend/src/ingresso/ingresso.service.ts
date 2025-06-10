import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateIngressoDto } from './dto/create-ingresso.dto';

@Injectable()
export class IngressoService {
  constructor(private readonly prisma: PrismaService) {}

  create(data: CreateIngressoDto) {
    return this.prisma.ingresso.create({ data });
  }

  findAll() {
    return this.prisma.ingresso.findMany();
  }

  findOne(id: number) {
    return this.prisma.ingresso.findUnique({ where: { id } });
  }

  remove(id: number) {
    return this.prisma.ingresso.delete({ where: { id } });
  }
}
