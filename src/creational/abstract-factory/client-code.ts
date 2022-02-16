import { EnterpriseCreateVehicleCustomerFactory } from './factories/enterprise-customer-vehicle-factory';
import { IndividualCreateVehicleCustomerFactory } from './factories/individual-customer-vehicle-factory';

const enterpriseFactory = new EnterpriseCreateVehicleCustomerFactory();
const individualFactory = new IndividualCreateVehicleCustomerFactory();

const enterpriseCar = enterpriseFactory.createVehicle(
  'Corsinha Rebaixao',
  'David',
);

const individualCar = individualFactory.createVehicle(
  'Celta com NEON',
  'Jonas',
);

enterpriseCar.pickUp();

individualCar.pickUp();
