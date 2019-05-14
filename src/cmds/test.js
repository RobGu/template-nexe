import BaseCmd from '../BaseCmd';

export default class Test extends BaseCmd {
  setOptions() {
    this.cmd.option('-s --small');
  }

  run(options) {
    console.warn(options);
  }
}
