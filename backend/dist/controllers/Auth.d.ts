import { BaseController } from './Base';
import { Request, Response } from 'express';
import { AuthService } from '@service/auth/Auth';
export declare class AuthController extends BaseController {
    private readonly auth;
    private readonly cookie;
    constructor(auth: AuthService);
    logout(res: Response, req: Request): Response<any>;
    refreshToken(token: string, res: Response): Promise<Response<any>>;
    google(): null;
    googleCallback(): null;
    facebook(): null;
    facebookCallback(): null;
    twitter(): null;
    twitterCallback(): null;
    linkedin(): null;
    linkedinCallback(): null;
    github(): null;
    githubCallback(): null;
    spotify(): null;
    spotifyCallback(): null;
}
