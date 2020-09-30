import { Logger } from './Logger';
export declare class LoggerFactory {
    private static readonly loggerMap;
    private constructor();
    static getLogger(Class: string): Logger | undefined;
}
