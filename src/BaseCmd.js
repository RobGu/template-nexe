import { Command } from 'commander';

export default class BaseCmd {
  /**
   *
   * @param {Command} cmd
   */
  constructor(cmd) {
    this.cmd = cmd;
    this.setOptions();
    cmd.action(this.run);
  }

  setOptions() {
  }

  run(...options) {
    console.warn(1111, options);
  }
}
