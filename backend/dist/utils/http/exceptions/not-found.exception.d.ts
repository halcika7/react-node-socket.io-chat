import { HttpException } from './http.exception';
export declare class NotFoundException extends HttpException {
    constructor(objectOrError?: string | object | any);
}
