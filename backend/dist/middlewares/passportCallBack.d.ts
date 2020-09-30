import { Request, Response } from 'express';
declare type providerType = 'google' | 'facebook' | 'twitter' | 'linkedin' | 'github' | 'spotify';
export declare const passportCallBack: (provider: providerType) => (req: Request, res: Response) => any;
export {};
