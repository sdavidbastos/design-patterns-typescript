import { SmartHouseCommand } from './command-protocol';

export class SmartHouseApp {
  private commands: { [k: string]: SmartHouseCommand } = {};

  addCommand(key: string, command: SmartHouseCommand): void {
    this.commands[key] = command;
  }
}
