import { ProductDecorator } from './product-decorator';

export class ProductStampDecorator extends ProductDecorator {
  getPrice(): number {
    return this.product.getPrice() + 10;
  }
}
