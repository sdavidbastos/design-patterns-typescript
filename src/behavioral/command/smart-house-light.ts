export class SmartHouseLight {
  private isOn = false;
  private intensity = 50;
  constructor(public name: string) {}

  getPowerStatus(): string {
    return this.isOn ? 'ON' : 'OFF';
  }

  on(): boolean {
    this.isOn = true;
    console.log(`${this.name} is ${this.getPowerStatus()}`);
    return this.isOn;
  }
  off(): boolean {
    this.isOn = false;
    console.log(`${this.name} is ${this.getPowerStatus()}`);
    return this.isOn;
  }
  increaseIntesity(): number {
    if (this.intensity >= 100) return this.intensity;
    this.intensity += 1;
    return this.intensity;
  }
  decreaseIntesity(): number {
    if (this.intensity <= 0) return this.intensity;
    this.intensity -= 1;
    return this.intensity;
  }
}
