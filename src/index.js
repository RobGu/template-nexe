import program from 'commander';
import fs from 'fs-extra';
import path from 'path';

const pkg = fs.readJSONSync(path.resolve(__dirname, '../package.json'));

program.version(pkg.version)
  .option('-p --current-path <current-path>');
const files = fs.readdirSync(path.resolve(__dirname, 'cmds')).map(f => f.replace(/\.js$/i, ''));

for (const file of files) {
  const CMD = require(path.resolve(__dirname, 'cmds', `${file}.js`)).default;
  new CMD(program.command(file));
}

program.parse(process.argv);
