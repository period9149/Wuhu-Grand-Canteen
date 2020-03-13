import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors()
  
  const options = new DocumentBuilder()
  .setTitle('后台管理API')
  .setDescription('供后台管理界面调用的服务端API')
  .setVersion('1.0')
  .addTag('cats')
  .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  const port = process.env.ADMIN_PORT || 3002
  await app.listen(port);
  console.log(`http://localhost:${port}/api-docs`)
}
bootstrap();
