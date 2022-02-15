import { BicycleFactory } from '../factories/bicycle-factory';
import { CarFactory } from '../factories/car-factory';
import { randomNumbers } from '../utils/random-numbers';
import { Vehicle } from '../vehicle/vehicle';

export function randomCarAlgorithm(): Vehicle {
  const carFactory = new CarFactory();
  const bicycleFactory = new BicycleFactory();
  const vehicles = [
    carFactory.getVehicle('Fusca'),
    carFactory.getVehicle('Celta Preto'),
    bicycleFactory.getVehicle('BMX'),
  ];

  return vehicles[randomNumbers(vehicles.length)];
}
