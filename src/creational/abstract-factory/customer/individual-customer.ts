import { CustomerProtocol } from './customer-protocol';

export class IndividualCustomer implements CustomerProtocol {
  constructor(public name: string) {
    this.name += ' [INDIVIDUAL]';
  }
}
