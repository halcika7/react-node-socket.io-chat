import { HttpException } from './http.exception';
export declare class ConflictException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
