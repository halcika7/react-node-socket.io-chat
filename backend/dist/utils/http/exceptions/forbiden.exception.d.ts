import { HttpException } from './http.exception';
export declare class ForbiddenException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
