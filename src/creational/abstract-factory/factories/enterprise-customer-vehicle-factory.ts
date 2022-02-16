import { CustomerProtocol } from '../customer/customer-protocol';
import { EnterpriseCustomer } from '../customer/enterprise-customer';
import { EnterpriseCar } from '../vehicle/enterprise-car';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';
import { CreateVehicleCustomerFactoryProtocol } from './customer-vehicle-factory-protocol';

export class EnterpriseCreateVehicleCustomerFactory
  implements CreateVehicleCustomerFactoryProtocol
{
  createCustomer(customerName: string): CustomerProtocol {
    return new EnterpriseCustomer(customerName);
  }
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol {
    const customer = this.createCustomer(customerName);
    return new EnterpriseCar(vehicleName, customer);
  }
}
