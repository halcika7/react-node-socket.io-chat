import { HttpException } from './http.exception';
export declare class UnsupportedMediaTypeException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
