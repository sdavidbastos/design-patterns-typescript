import { ECommerceShoppingCart } from './shopping-cart/ecommerce-shopping-cart';
import { NewDiscount } from './shopping-cart/new-discount-strategy';

const shoppingCart = new ECommerceShoppingCart();
// shoppingCart.discount = new DefaultDiscount();
shoppingCart.discount = new NewDiscount();
shoppingCart.addProduct({ name: 'caneta', price: 2 });
shoppingCart.addProduct({ name: 'computador', price: 3_500 });
shoppingCart.addProduct({ name: 'celular', price: 1_500 });

console.log(shoppingCart.getTotal());
console.log(shoppingCart.getTotalWithDiscount());
