import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCarDto {
  @ApiProperty({ example: 'Toyota', description: 'Car manufacturer' })
  make: string;

  @ApiProperty({ example: 'Corolla', description: 'Car model' })
  model: string;

  @ApiProperty({ example: 2020, description: 'Year of manufacture' })
  year: number;

  @ApiProperty({ example: 15000, description: 'Price in USD' })
  price: number;
}

export class UpdateCarDto {
  @ApiPropertyOptional({ example: 'Toyota', description: 'Car manufacturer' })
  make?: string;

  @ApiPropertyOptional({ example: 'Corolla', description: 'Car model' })
  model?: string;

  @ApiPropertyOptional({ example: 2020, description: 'Year of manufacture' })
  year?: number;

  @ApiPropertyOptional({ example: 15000, description: 'Price in USD' })
  price?: number;
}
