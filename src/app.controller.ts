import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
} from '@nestjs/common';
import { data } from './data';

@Controller('store')
export class StoreController {
  @Get()
  getAllStores() {
    return [];
  }

  @Get(':id')
  getStoreById() {
    return {};
  }

  @Post()
  createStore() {
    return 'Created';
  }

  @Put(':id')
  updateStore() {
    return 'Updated';
  }

  @Delete(':id')
  deleteStore() {
    return 'Deleted';
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
