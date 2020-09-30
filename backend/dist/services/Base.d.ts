import { ResponseMessage, ResponseObject } from '@ctypes';
export declare class BaseService {
    protected returnGenericFailed(status: number): ResponseMessage;
    protected returnResponse(status: number, objectResp: {
        [key: string]: any;
    }): ResponseObject;
    protected returnResponseMessage(status: number, message: string): ResponseMessage;
    protected returnResponseTokens<T>(data: T): T;
}
