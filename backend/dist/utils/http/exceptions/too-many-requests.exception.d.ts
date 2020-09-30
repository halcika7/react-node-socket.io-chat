import { HttpException } from './http.exception';
export declare class TooManyRequestsException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
