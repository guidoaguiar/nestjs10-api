import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import {
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
  Min,
} from 'class-validator';
import { type } from 'os';

export class CreateVideoDto {
  @ApiProperty({type: 'string'})
  @MaxLength(255)
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({type: 'string'})
  @IsString()
  @IsOptional()
  description: string | null;

  @ApiProperty({type: 'number'})
  @Min(1)
  @IsInt()
  @IsNotEmpty()
  @Type(() => Number)
  category_id: number;
}

export class CreateVideoWithUploadDto extends CreateVideoDto {
 @ApiProperty({type: 'string', format: 'binary'})
 file: string;
}
