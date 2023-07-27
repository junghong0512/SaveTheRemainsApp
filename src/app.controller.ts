import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
  HttpCode,
} from '@nestjs/common';
import { StoreType, data } from './data';

import { v4 as uuid } from 'uuid';

@Controller('store')
export class StoreController {
  @Get()
  getAllStores() {
    return data.store;
  }

  @Get(':id')
  getStoreById(@Param('id') id: string) {
    return data.store.find((store) => store.id === id);
  }

  @Post()
  createStore(
    @Body()
    {
      name,
      address,
      description,
      location,
      type,
    }: {
      name: string;
      address: string;
      description: string;
      location: [number, number];
      type: StoreType;
    },
  ) {
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

  @Put(':id')
  updateStore(
    @Param('id') id: string,
    @Body()
    body: {
      name: string;
      address: string;
      description: string;
      location: [number, number];
      type: StoreType;
    },
  ) {
    const storeToUpdate = data.store.find((store) => store.id === id);
    if (!storeToUpdate) return;

    const storeIndex = data.store.findIndex((store) => store.id === id);

    data.store[storeIndex] = {
      ...data.store[storeIndex],
      ...body,
    };

    return data.store[storeIndex];
  }

  @HttpCode(204)
  @Delete(':id')
  deleteStore(@Param('id') id: string) {
    const storeIndex = data.store.findIndex((store) => store.id === id);

    if (storeIndex === -1) return;

    data.store.splice(storeIndex, 1);

    return;
  }

  @Get('/find')
  findMyStores(
    @Query('distance') distance: number,
    @Query('lat') lat: number,
    @Query('lon') lon: number,
  ) {
    console.log(distance, lat, lon);
    return `Store list away from [${lat}, ${lon}], distance is ${distance}`;
  }
}
