import { Radio } from './device/radio';
import { TV } from './device/tv';
import { RemoteControl } from './remote-control/remote-control';
import { RemoteControlWithVolume } from './remote-control/remote-control-with-volume';

function clienteCode(
  abstraction: RemoteControl | RemoteControlWithVolume,
): void {
  abstraction.togglePower();

  if (!('volumeUp' in abstraction)) return;
  abstraction.volumeUp();
  abstraction.volumeDown();
}

const tv = new TV();
const radio = new Radio();

const radioRemoteControl = new RemoteControl(radio);
const tvRemoteControl = new RemoteControlWithVolume(tv);

clienteCode(radioRemoteControl);
clienteCode(tvRemoteControl);
