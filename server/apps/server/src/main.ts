import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors()
  
  const options = new DocumentBuilder()
  .setTitle('前端API')
  .setDescription('供网站和APP调用的服务端API')
  .setVersion('1.0')
  .addBearerAuth()
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.SERVER_PORT || 3001
  await app.listen(port);
  console.log(`http://localhost:${port}/api-docs`)

}
bootstrap();
