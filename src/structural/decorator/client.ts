import { ProductStampDecorator } from './product/product-stamp-decorator';
import { TShirt } from './product/t-shirt';

const tShirt = new TShirt();
const tShirtWithSamp = new ProductStampDecorator(tShirt);

console.log(tShirt.getPrice());
console.log(tShirtWithSamp.getPrice());
