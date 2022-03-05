import { ProductProtocol } from './product-protocol';

export class TShirt implements ProductProtocol {
  private price = 49.9;
  private name = 'Camiseta';

  getPrice(): number {
    return this.price;
  }
  getName(): string {
    return this.name;
  }
}
