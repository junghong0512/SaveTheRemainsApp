import { IsNotEmpty, IsNumber, IsPositive, IsString } from 'class-validator';

export class CreateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;

  store_id: string;
}

export class UpdateItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNotEmpty()
  @IsNumber()
  @IsPositive()
  price: number;
}

export class ItemResponseDto {
  id: string;
  name: string;
  price: number;
  description: string;
  store_id: string;
  created_at: Date;
  updated_at: Date;

  constructor(partial: Partial<ItemResponseDto>) {
    Object.assign(this, partial);
  }
}
