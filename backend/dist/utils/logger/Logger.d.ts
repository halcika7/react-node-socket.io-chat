export declare class Logger {
    private Class;
    private readonly winstonLogger;
    private logConfig;
    constructor(Class: string);
    private formatMessage;
    private formatErrorMessage;
    private logEvent;
    info(msg: string, method: string): void;
    debug(msg: string, method: string): void;
    warning(msg: string, method: string): void;
    error(err: Error | string, method: string): void;
}
