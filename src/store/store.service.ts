import { Injectable } from '@nestjs/common';
import { StoreType, data } from 'src/data';

import { v4 as uuid } from 'uuid';
import { StoreResponseDto } from 'src/dtos/store.dto';

export interface StoreData {
  name: string;
  address: string;
  description: string;
  location: [number, number];
  type: StoreType;
}

interface UpdateStoreData {
  name?: string;
  address?: string;
  description?: string;
  location?: [number, number];
  type?: StoreType;
}

@Injectable()
export class StoreService {
  getAllStores(): StoreResponseDto[] {
    return data.store.map((store) => new StoreResponseDto(store));
  }

  getStoreById(id: string): StoreResponseDto {
    const store = data.store.find((store) => store.id === id);
    if (!store) return;

    return new StoreResponseDto(store);
  }

  createStore({ name, address, description, location, type }: StoreData) {
    const newStore = {
      id: uuid(),
      name,
      address,
      description,
      location,
      type,
      created_at: new Date(),
      updated_at: new Date(),
    };
    data.store.push(newStore);
    return new StoreResponseDto(newStore);
  }

  updateStore(id: string, body: UpdateStoreData) {
    const storeToUpdate = data.store.find((store) => store.id === id);
    if (!storeToUpdate) return;

    const storeIndex = data.store.findIndex((store) => store.id === id);
    data.store[storeIndex] = {
      ...data.store[storeIndex],
      ...body,
      updated_at: new Date(),
    };

    return new StoreResponseDto(data.store[storeIndex]);
  }

  deleteStore(id: string) {
    const storeIndex = data.store.findIndex((store) => store.id === id);

    if (storeIndex === -1) return;

    data.store.splice(storeIndex, 1);

    return;
  }
}
