// prisma.module.ts
import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // deixa disponível globalmente, opcional mas comum
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // exporta pra outros módulos usarem
})
export class PrismaModule {}
