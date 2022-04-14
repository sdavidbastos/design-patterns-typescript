import { deliveryContext } from './delivery/delivery-context';
import { DeliveryFactory } from './delivery/delivery-factory';

const factory = new DeliveryFactory();
deliveryContext(factory, 'David', '23D', 'Piraquê', 'BA');
deliveryContext(factory, 'Jonas', '23D', 'Piraquê', 'BA');
deliveryContext(factory, 'Bacelar', '50S', 'Piraquê', 'BA');
deliveryContext(factory, 'Joao', '2', 'Rua asd', 'BH');
deliveryContext(factory, 'Silvana', '502', 'Rua QWE', 'BA');

console.log(factory.getLocations());
