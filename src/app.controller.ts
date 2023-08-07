import { StoreService } from './app.service';

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

import { CreateStoreDto, UpdateStoreDto } from './dtos/store.dto';

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
    { name, address, description, location, type }: CreateStoreDto,
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
    body: UpdateStoreDto,
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
