import { HttpException } from './http.exception';
export declare class PayloadTooLargeException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
