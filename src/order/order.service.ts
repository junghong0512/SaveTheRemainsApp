import { Injectable } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';

@Injectable()
export class OrderService {
  constructor(private readonly storeService: StoreService) {}

  getAllOrders() {
    return;
  }
}
