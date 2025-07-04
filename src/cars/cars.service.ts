import { Injectable } from '@nestjs/common';
import { Car } from './car.entity';
import { CreateCarDto, UpdateCarDto } from './dto';

@Injectable()
export class CarsService {
  private cars: Car[] = [];
  private idCounter = 1;

  findAll(): Car[] {
    return this.cars;
  }

  findOne(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }

  create(createCarDto: CreateCarDto): Car {
    const car: Car = {
      id: this.idCounter++,
      ...createCarDto,
    };
    this.cars.push(car);
    return car;
  }

  update(id: number, updateCarDto: UpdateCarDto): Car | undefined {
    const car = this.findOne(id);
    if (!car) return undefined;
    Object.assign(car, updateCarDto);
    return car;
  }

  remove(id: number): void {
    this.cars = this.cars.filter(car => car.id !== id);
  }
}
