import { Module } from '@nestjs/common';
import { StoreController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [StoreController],
  providers: [AppService],
})
export class AppModule {}
