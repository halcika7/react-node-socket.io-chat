import { HttpException } from './http.exception';
export declare class CustomException extends HttpException {
    constructor(objectOrError: string | object | any, description: string, statusCode: number);
}
