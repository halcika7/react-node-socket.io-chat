import { HttpException } from './http.exception';
export declare class InternalServerErrorException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
