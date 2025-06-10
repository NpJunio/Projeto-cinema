// sessao.module.ts
import { Module } from '@nestjs/common';
import { SessaoService } from './sessao.service';
import { SessaoController } from './sessao.controller';
import { PrismaModule } from '../prisma/prisma.module'; // ajuste o caminho

@Module({
  imports: [PrismaModule], // importante importar o PrismaModule aqui
  providers: [SessaoService],
  controllers: [SessaoController],
})
export class SessaoModule {}
