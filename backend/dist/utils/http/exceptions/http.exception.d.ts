export declare class HttpException extends Error {
    private readonly response;
    private readonly status;
    readonly name: string;
    constructor(response: string | Record<string, any>, status: number, name?: string);
    private initMessage;
    getResponse(): string | object;
    getStatus(): number;
    static createBody(objectOrError: object | string, message?: string, statusCode?: number): object;
}
