import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { ClientModule } from './client/client.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [DatabaseModule, ClientModule, ProductModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
