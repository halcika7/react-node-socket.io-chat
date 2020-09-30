import passport from 'passport';
import { Profile as GoogleProfile, VerifyCallback } from 'passport-google-oauth20';
import { Response, Request } from 'express';
declare type providerType = 'google' | 'facebook' | 'twitter' | 'linkedin' | 'github' | 'spotify';
interface Profile extends GoogleProfile {
    emails: {
        value: string;
    }[];
    photos: {
        value: string;
    }[];
}
export declare class PassportService {
    private readonly cookie;
    private readonly jwt;
    socialCallback(req: Request, res: Response, provider: providerType): any;
    static passportStrategy(profile: Profile, done: VerifyCallback, socialType: providerType): Promise<void>;
    private passportCallback;
}
export default passport;
