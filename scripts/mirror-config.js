const { existsSync } = require('fs');
const { exec } = require('shelljs');
const { readFile, writeFile } = require('fs/promises');
const chalk = require('chalk');

(async () => {
  const path = 'config.yml';
  const mirrorPath = 'config.example.yml';

  if (!existsSync(path)) process.exit(0);

  const file = await readFile(path, 'utf-8');
  const masked = file.replace(/: .*/gm, ': x');
  await writeFile(mirrorPath, masked, 'utf-8');

  const hasDiff = exec(`git diff --quiet ${mirrorPath}`).code !== 0;

  if (hasDiff) {
    console.log(
      chalk.bold.red('❌ Error: ') + chalk.bold(mirrorPath) + chalk.white(' has been modified.\n')
    );
    process.exit(1);
  }
})();
