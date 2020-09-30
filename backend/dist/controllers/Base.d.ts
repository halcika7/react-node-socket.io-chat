import { Response } from 'express';
export declare class BaseController {
    protected sendResponse(res: Response, status: number, resObj: object): Response;
}
