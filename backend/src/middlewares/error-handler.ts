import { Request, Response } from "express";

interface CustomError extends Error {
  statusCode: number;
}

export default (err: CustomError, _: Request, res: Response) => {
  console.error(err);
  const { statusCode = 500, message } = err;

  res.status(statusCode).send({
    message: statusCode === 500 ? "An error occurred on the server" : message,
  });
};
