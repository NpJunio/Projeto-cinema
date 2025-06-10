import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSalaDto } from './dto/create-sala.dto';

@Injectable()
export class SalaService {
  constructor(private prisma: PrismaService) {}

  create(createSalaDto: CreateSalaDto) {
    return this.prisma.sala.create({ data: createSalaDto });
  }

  findAll() {
    return this.prisma.sala.findMany();
  }
}
