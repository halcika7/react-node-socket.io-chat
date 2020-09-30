import { Response } from 'express';
export declare abstract class CookieService {
    private static readonly _refreshName;
    private static readonly refreshOptions;
    static setRefreshToken: (res: Response, token: string) => void;
    static removeRefreshToken: (res: Response) => void;
}
