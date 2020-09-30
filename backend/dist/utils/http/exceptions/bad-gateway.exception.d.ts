import { HttpException } from './http.exception';
export declare class BadGatewayException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
