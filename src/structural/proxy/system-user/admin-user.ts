import {
  SystemUserAddresProtocol,
  SystemUserProtocol,
} from './system-user-protocol';

export class AdminUser implements SystemUserProtocol {
  constructor(public firstName: string, public userName: string) {}
  async getAddresses(): Promise<SystemUserAddresProtocol[]> {
    return new Promise((resolve) => {
      return setTimeout(() => {
        return resolve([
          { street: 'Av Brasil', number: 40 },
          { street: 'Piraquê', number: 10 },
          { street: 'Rua Itaciquara', number: 386 },
        ]);
      }, 2000);
    });
  }
}
