import { ClassSerializerInterceptor, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
// import { CustomInterceptor } from './custom.interceptor';
import { OrderModule } from './order/order.module';
import { StoreModule } from './store/store.module';
import { ItemModule } from './item/item.module';

@Module({
  imports: [OrderModule, StoreModule, ItemModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      // useClass: CustomInterceptor,
      useClass: ClassSerializerInterceptor,
    },
  ],
})
export class AppModule {}
