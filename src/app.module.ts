import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { StoreController } from './app.controller';
import { StoreService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { CustomInterceptor } from './custom.interceptor';

@Module({
  imports: [],
  controllers: [StoreController],
  providers: [
    StoreService,
    {
      provide: APP_INTERCEPTOR,
      // useClass: CustomInterceptor,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
