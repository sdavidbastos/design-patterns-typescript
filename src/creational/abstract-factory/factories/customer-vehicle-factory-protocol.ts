import { CustomerProtocol } from '../customer/customer-protocol';
import { VehicleProtocol } from '../vehicle/vehicle-protocol';

export interface CreateVehicleCustomerFactoryProtocol {
  createCustomer(customerName: string): CustomerProtocol;
  createVehicle(vehicleName: string, customerName: string): VehicleProtocol;
}
