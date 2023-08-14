import { StoreService } from './store.service';

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

import {
  CreateStoreDto,
  StoreResponseDto,
  UpdateStoreDto,
} from 'src/dtos/store.dto';

@Controller('store')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Get()
  getAllStores(): StoreResponseDto[] {
    return this.storeService.getAllStores();
  }

  @Get(':id')
  getStoreById(@Param('id', ParseUUIDPipe) id: string): StoreResponseDto {
    return this.storeService.getStoreById(id);
  }

  @Post()
  createStore(
    @Body()
    { name, address, description, location, type }: CreateStoreDto,
  ): StoreResponseDto {
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
  ): StoreResponseDto {
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
