import { DeviceImplemantationProtocol } from '../device/device-implementation-protocol';

export class RemoteControl {
  constructor(protected device: DeviceImplemantationProtocol) {}

  togglePower(): void {
    this.device.setPower(!this.device.getPower());
    console.log(
      `${this.device.getName()} power status: ${this.device.getPower()}`,
    );
  }
}
