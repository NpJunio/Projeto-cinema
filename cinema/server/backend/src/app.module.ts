import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SalaModule } from './sala/sala.module';
import { IngressoModule } from './ingresso/ingresso.module';
import { PrismaService } from './prisma/prisma.service';
import { FilmeModule } from './filme/filme.module';
import { SessaoModule } from './sessao/sessao.module';

@Module({
  imports: [SalaModule, IngressoModule, FilmeModule, SessaoModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
