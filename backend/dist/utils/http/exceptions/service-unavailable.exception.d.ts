import { HttpException } from './http.exception';
export declare class ServiceUnavailableException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
