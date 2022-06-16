import { logger } from '@app/log';
import { existsSync, readFileSync } from 'fs';
import { load } from 'js-yaml';

export type Config = {
  token: string;
};

if (!existsSync('config.yml')) logger.error('Config: "config.yml" not exists!');

export const config = load(readFileSync('config.yml', 'utf8')) as Config;
