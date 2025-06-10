import { Module } from '@nestjs/common';
import { IngressoService } from './ingresso.service';
import { IngressoController } from './ingresso.controller';
import { PrismaModule } from '../prisma/prisma.module'; // Importa o PrismaModule

@Module({
  imports: [PrismaModule],  // importa aqui pra ter acesso ao PrismaService
  providers: [IngressoService],
  controllers: [IngressoController],
})
export class IngressoModule {}
