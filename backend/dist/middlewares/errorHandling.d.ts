import { Request, Response, NextFunction } from 'express';
export declare const errorHandle: (error: Error, _: Request, res: Response, __: NextFunction) => Response<any>;
