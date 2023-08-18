import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsOptional, MaxLength } from 'class-validator';

export class CreateCategoryDto {
    @ApiProperty({type: 'string'})
    @MaxLength(50)
    @IsString()
    @IsNotEmpty()
    name: string;
    
    @ApiProperty({type: 'string'})
    @IsOptional()
    description?: string | null;
}
