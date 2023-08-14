import { Body, Controller, Post } from '@nestjs/common';
import { ItemService } from './item.service';

import {
  CreateItemDto,
  UpdateItemDto,
  ItemResponseDto,
} from 'src/dtos/item.dto';

@Controller('item')
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Post(':store_id')
  createItem(
    @Body()
    { name, description, price, store_id }: CreateItemDto,
  ): ItemResponseDto {
    return this.itemService.createItem({
      name,
      price,
      description,
      store_id,
    });
  }
}
