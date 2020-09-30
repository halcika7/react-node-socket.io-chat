import { Document } from 'mongoose';
declare type idTypes = 'googleId' | 'facebookId' | 'twitterId' | 'linkedinId' | 'githubId' | 'spotifyId' | 'steamId';
export interface UserInterface extends Document {
    name: string;
    picture: string;
    email: string;
    subscription: {
        [key: string]: any;
    };
    socialIds: Map<idTypes, string>;
}
export {};
