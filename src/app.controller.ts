import { StoreData, StoreService } from './app.service';

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
  ParseUUIDPipe,
} from '@nestjs/common';
import { StoreType } from './data';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  getAllStores() {
    return this.storeService.getAllStores();
  }

  @Get(':id')
  getStoreById(@Param('id', ParseUUIDPipe) id: string) {
    return this.storeService.getStoreById(id);
  }

  @Post()
  createStore(
    @Body()
    { name, address, description, location, type }: StoreData,
  ) {
    return this.storeService.createStore({
      name,
      address,
      description,
      location,
      type,
    });
  }

  @Put(':id')
  updateStore(
    @Param('id', ParseUUIDPipe) id: string,
    @Body()
    body: {
      name: string;
      address: string;
      description: string;
      location: [number, number];
      type: StoreType;
    },
  ) {
    return this.storeService.updateStore(id, body);
  }

  @HttpCode(204)
  @Delete(':id')
  deleteStore(@Param('id', ParseUUIDPipe) id: string) {
    return this.storeService.deleteStore(id);
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
