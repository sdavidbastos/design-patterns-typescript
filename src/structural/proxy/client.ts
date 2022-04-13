import { SystemUserProxy } from './system-user/system-user-proxy';
async function clientCode(): Promise<void> {
  const user = new SystemUserProxy('david', 'sdavids');
  console.log('2 segundos');
  console.log(await user.getAddresses());

  for (let index = 0; index < 5; index++) {
    console.log(await user.getAddresses());
  }
}

clientCode();
