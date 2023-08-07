import {
  IsNumber,
  IsPositive,
  isString,
  isNotEmpty,
  IsOptional,
  IsString,
  IsNotEmpty,
  IsArray,
} from 'class-validator';

import { StoreType } from 'src/data';

export class CreateStoreDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsArray()
  location: [number, number];

  type: StoreType;
}

export class UpdateStoreDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  address: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsOptional()
  @IsArray()
  location: [number, number];

  @IsOptional()
  type: StoreType;
}
