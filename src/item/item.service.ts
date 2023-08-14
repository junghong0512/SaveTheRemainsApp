import { Injectable } from '@nestjs/common';
import { StoreResponseDto } from 'src/dtos/store.dto';
import { StoreService } from 'src/store/store.service';
import { data } from 'src/data';

import { v4 as uuid } from 'uuid';
import { ItemResponseDto } from 'src/dtos/item.dto';

export interface ItemData {
  name: string;
  price: number;
  description: string;
  store_id: string;
}

@Injectable()
export class ItemService {
  constructor(private readonly storeService: StoreService) {}

  createItem({ name, price, description, store_id }: ItemData) {
    const store: StoreResponseDto = this.storeService.getStoreById(store_id);

    const newItem = {
      id: uuid(),
      name,
      description,
      price,
      store_id: store.id,
      created_at: new Date(),
      updated_at: new Date(),
    };
    data.item.push(newItem);
    return new ItemResponseDto(newItem);
  }
}
