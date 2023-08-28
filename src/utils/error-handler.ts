import { NextFunction, Request, Response } from "express";
import { BaseError } from "../classes/base-error";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";
import { StructError } from "superstruct";


export function handleError(err:any) {
  console.log(err);
}

export function isTrustedError(error: Error) {
  return (
    error instanceof BaseError ||
    error.name === "PrismaClientKnownRequestError" ||
    error.name === "StructError"
  );
}

export function errorHandlerMiddleware(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err.name === "StructError")
    return (err = handleValidationError(err, res));
  else if (err.name == "PrismaClientKnownRequestError") {
    return handlePrismaClientError(err, res);
  } else returnError(err, req, res, next);
}

export function handleValidationError(
  err: StructError,
  res: Response
) {

  const message = err.toString();
  const fields = err.path;
  let code = 400;
  res.status(code).send({ messages: message, fields: fields });
}

const handlePrismaClientError = (err: PrismaClientKnownRequestError, res: Response) => {
  let error = "Internal Server Error";
  const fields = err?.meta?.target;
  const code = 500;

  if (err.code === "P2002")
    error = `Unique constraint failed on the field ${fields}`;

  res.status(code).send({ messages: [error], fields: fields });
};

function returnError(
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) {
  res.status(err.statusCode || 500).send(err.message);
}
