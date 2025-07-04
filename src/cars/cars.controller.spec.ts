import { Test, TestingModule } from '@nestjs/testing';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';

describe('CarsController', () => {
  let controller: CarsController;
  let service: CarsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarsController],
      providers: [CarsService],
    }).compile();

    controller = module.get<CarsController>(CarsController);
    service = module.get<CarsService>(CarsService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a car', () => {
    const car = controller.create({ make: 'Toyota', model: 'Corolla', year: 2020, price: 15000 });
    expect(car).toHaveProperty('id');
    expect(car.make).toBe('Toyota');
  });

  it('should return all cars', () => {
    controller.create({ make: 'Honda', model: 'Civic', year: 2019, price: 12000 });
    expect(controller.findAll().length).toBeGreaterThan(0);
  });
});
