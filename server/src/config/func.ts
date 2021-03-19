// NOT Required gql handles errors

import { Request, Response, NextFunction } from "express";

type endpoint = (req: Request, res: Response, next: NextFunction) => any;

const asyncFunc = (fn: endpoint) => (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise.resolve(fn(req, res, next)).catch(next);

export default asyncFunc;
