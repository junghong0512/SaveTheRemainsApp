import { Injectable } from '@nestjs/common';
import { StoreType, data } from './data';

import { v4 as uuid } from 'uuid';

export interface StoreData {
  name: string;
  address: string;
  description: string;
  location: [number, number];
  type: StoreType;
}

@Injectable()
export class StoreService {
  getAllStores() {
    return data.store;
  }

  getStoreById(id: string) {
    return data.store.find((store) => store.id === id);
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
    return newStore;
  }

  updateStore(id: string, body: StoreData) {
    const storeToUpdate = data.store.find((store) => store.id === id);
    if (!storeToUpdate) return;

    const storeIndex = data.store.findIndex((store) => store.id === id);
    data.store[storeIndex] = {
      ...data.store[storeIndex],
      ...body,
      updated_at: new Date(),
    };

    return data.store[storeIndex];
  }

  deleteStore(id: string) {
    const storeIndex = data.store.findIndex((store) => store.id === id);

    if (storeIndex === -1) return;

    data.store.splice(storeIndex, 1);

    return;
  }
}
