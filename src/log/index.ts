import winston, { transports } from 'winston';
import { Logger } from './types';

const log = winston.createLogger({
  transports: [
    new transports.Console({
      level: 'info',
      format: winston.format.combine(
        winston.format.colorize(),
        winston.format.align(),
        winston.format.simple()
      ),
      handleExceptions: true,
      handleRejections: true
    })
  ]
});

export const logger: Logger = {
  profile: id => log.profile(id),

  info: message => {
    if (typeof message === 'object') log.info(JSON.stringify(message, null, 2));
    else log.info(message);
  },

  error: (message): never => {
    log.error(message);
    throw new Error(message);
  }
};
