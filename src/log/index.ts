import winston, { transports } from 'winston';
import { Logger } from './types';

const log = winston.createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.simple()
      ),
      handleExceptions: true,
      handleRejections: true
    })
  ]
});

export const logger: Logger = {
  profile: id => log.profile(id),
  info: message => log.info(message),
  error: (message): never => {
    log.error(message);
    throw new Error(message);
  }
};
