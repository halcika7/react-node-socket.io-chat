import { HttpException } from './http.exception';
export declare class GoneException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
