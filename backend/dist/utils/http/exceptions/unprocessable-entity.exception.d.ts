import { HttpException } from './http.exception';
export declare class UnprocessableEntityException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
