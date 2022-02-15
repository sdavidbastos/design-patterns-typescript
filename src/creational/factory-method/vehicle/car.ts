import { Vehicle } from './vehicle';

export class Car implements Vehicle {
  constructor(private name: string) {}
  pickUp(customerName: string): void {
    console.log(`${this.name} está buscando o cliente ${customerName}`);
  }
  stop(): void {
    console.log(`${this.name} parou`);
  }
}
