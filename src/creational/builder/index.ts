import { MainDishBuilder } from './classes/main-dish-builder';

const maindishBuilder = new MainDishBuilder();
maindishBuilder.makeMeal();
console.log(maindishBuilder.getMeal());
console.log(maindishBuilder.getPrice());
