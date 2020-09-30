import { HttpException } from './http.exception';
export declare class BadRequestException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
