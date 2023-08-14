import { Injectable } from '@nestjs/common';
import { StoreService } from 'src/store/store.service';

@Injectable()
export class ItemService {
  constructor(private readonly storeService: StoreService) {}
}
