import { HttpException } from './http.exception';
export declare class UnauthorizedException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
