import { HttpException } from './http.exception';
export declare class NotImplementedException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
