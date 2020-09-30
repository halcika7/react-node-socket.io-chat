import { HttpException } from './http.exception';
export declare class RequestTimeoutException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
