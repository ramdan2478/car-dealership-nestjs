import { Controller, Get, Post, Body, Param, Put, Delete, NotFoundException } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CarsService } from './cars.service';
import { CreateCarDto, UpdateCarDto } from './dto';
import { Car } from './car.entity';

@ApiTags('cars')
@Controller('cars')
export class CarsController {
  constructor(private readonly carsService: CarsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all cars' })
  @ApiResponse({ status: 200, description: 'List of cars.' })
  findAll(): Car[] {
    return this.carsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a car by ID' })
  @ApiResponse({ status: 200, description: 'Car found.' })
  findOne(@Param('id') id: string): Car {
    const car = this.carsService.findOne(+id);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }

  @Post()
  @ApiOperation({ summary: 'Create a new car' })
  @ApiResponse({ status: 201, description: 'Car created.' })
  create(@Body() createCarDto: CreateCarDto): Car {
    return this.carsService.create(createCarDto);
  }

  @Put(':id')
  @ApiOperation({ summary: 'Update a car' })
  @ApiResponse({ status: 200, description: 'Car updated.' })
  update(@Param('id') id: string, @Body() updateCarDto: UpdateCarDto): Car {
    const car = this.carsService.update(+id, updateCarDto);
    if (!car) throw new NotFoundException('Car not found');
    return car;
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Delete a car' })
  @ApiResponse({ status: 200, description: 'Car deleted.' })
  remove(@Param('id') id: string): void {
    return this.carsService.remove(+id);
  }
}
