import { MainDishBuilder } from '../../creational/builder/classes/main-dish-builder';

export class BuilderFacade {
  private maindishBuilder = new MainDishBuilder();

  makeMeal(): void {
    this.maindishBuilder.makeMeal();
    console.log(this.maindishBuilder.getMeal());
    console.log(this.maindishBuilder.getPrice());
  }
}
