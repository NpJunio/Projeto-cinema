// server/src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Habilita CORS para o frontend
  app.use(bodyParser.json({ limit: '5mb' }));
  app.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
  
  app.enableCors({
    origin: 'http://localhost:3000', // ou a porta onde o React está rodando (geralmente 5173 com Vite)
    credentials: true
  });

  await app.listen(3001); // Porta do backend
}
bootstrap();
