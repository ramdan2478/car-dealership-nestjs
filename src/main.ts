import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger setup Intialize
  const config = new DocumentBuilder()
    .setTitle('Car Dealership API')
    .setDescription('API for managing car inventory')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // End Swagger setup

  // Enable graceful shutdown
  // handles SIGINT
  app.enableShutdownHooks();
  // handles SIGTERM
  process.on('SIGTERM', () => {
    app.close();
  });
  //End Graceful shutdown
  
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
