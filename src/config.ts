import { readFileSync } from 'fs';
import { load } from 'js-yaml';

export interface Config {
  token: string;
}

export const config = load(
  readFileSync(process.argv[process.argv.length - 1], 'utf8')
) as Config;
