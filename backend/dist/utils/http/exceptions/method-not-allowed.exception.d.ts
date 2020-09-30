import { HttpException } from './http.exception';
export declare class MethodNotAllowedException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
