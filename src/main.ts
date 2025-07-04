import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Swagger setup
  const config = new DocumentBuilder()
    .setTitle('Used Car Dealership API')
    .setDescription('API for managing car inventory')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  // Enable graceful shutdown (handles SIGTERM, SIGINT)
  app.enableShutdownHooks();
  // Optionally, add shutdown logic to perform cleanup tasks
  process.on('SIGTERM', () => {
    // console.log('Received SIGTERM, shutting down gracefully...');
    app.close();  // Ensure the app closes gracefully
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
