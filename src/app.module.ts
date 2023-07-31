import { Module } from '@nestjs/common';
import { StoreController } from './app.controller';
import { StoreService } from './app.service';

@Module({
  imports: [],
  controllers: [StoreController],
  providers: [StoreService],
})
export class AppModule {}
