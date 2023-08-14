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
import { Exclude, Expose } from 'class-transformer';
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

export class StoreResponseDto {
  id: string;
  name: string;
  address: string;
  description: string;
  location: [number, number];
  type: StoreType;

  @Exclude()
  created_at: Date;

  @Exclude()
  updated_at: Date;

  @Expose({ name: 'createdAt' })
  transformCreatedAt() {
    return this.created_at;
  }

  constructor(partial: Partial<StoreResponseDto>) {
    Object.assign(this, partial);
  }
}
