import { transports, format } from "winston";
import expressWinston from "express-winston";
const { combine, timestamp, printf, json } = format;

const messageFormat = combine(
  timestamp(),
  printf(({ level, message, timestamp }) => `${timestamp} ${level}: ${message}`)
);

export const requestLogger = expressWinston.logger({
  transports: [
    new transports.Console({
      format: messageFormat,
    }),
    new transports.File({
      filename: "request.log",
      format: json(),
    }),
  ],
});

export const errorLogger = expressWinston.errorLogger({
  transports: [new transports.File({ filename: "error.log" })],
  format: json(),
});
