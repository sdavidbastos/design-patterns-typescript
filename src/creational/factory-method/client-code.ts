import { CarFactory } from './factories/car-factory';
import { randomCarAlgorithm } from './main/main-vehicle-algorithm';
import { randomNumbers } from './utils/random-numbers';

const carFactory = new CarFactory();
const customerNames = ['David', 'Jonas', 'Bacelar', 'João'];

for (let i = 0; i < 10; i++) {
  const vehicle = randomCarAlgorithm();
  const name = customerNames[randomNumbers(customerNames.length)];

  vehicle.pickUp(name);
  vehicle.stop();

  const newCar = carFactory.pickUp(name, `NOVO CARRO - ${randomNumbers(100)}`);
  newCar.stop();
  console.log('-------------');
}
