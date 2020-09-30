import passport from 'passport';
import {
  Strategy as GoogleStrategy,
  Profile as GoogleProfile,
  VerifyCallback,
} from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';
import { Strategy as TwitterStrategy } from 'passport-twitter';
import { Strategy as LinkedinStrategy } from 'passport-linkedin-oauth2';
import {
  Strategy as GitHubStrategy,
  Profile as GithubProfile,
} from 'passport-github2';
import { Strategy as SpotifyStrategy } from 'passport-spotify';
import { Configuration } from '@env';
import { Response, Request } from 'express';
import User from '@model/User';
import { UserInterface } from '@model/User/User';
import { CookieService } from './Cookie';
import { JWTService } from './JWT';
import { Injectable } from '@decorator/class';

type providerType =
  | 'google'
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'github'
  | 'spotify';
type idTypes =
  | 'googleId'
  | 'facebookId'
  | 'twitterId'
  | 'linkedinId'
  | 'githubId'
  | 'spotifyId';

interface Profile extends GoogleProfile {
  emails: { value: string }[];
  photos: { value: string }[];
}

@Injectable()
export class PassportService {
  private readonly cookie = CookieService;

  private readonly jwt = JWTService;

  socialCallback(req: Request, res: Response, provider: providerType) {
    return passport.authenticate(
      provider,
      { session: false, failureRedirect: '/', successRedirect: '/' },
      (err, user, isNewUser) => this.passportCallback(err, user, res, isNewUser)
    )(req, res, provider);
  }

  static async passportStrategy(
    profile: Profile,
    done: VerifyCallback,
    socialType: providerType
  ) {
    try {
      const email = profile.emails[0].value || '';
      if (!email) {
        return done('Email address is required');
      }
      const user = await User.findOne({ email });
      if (!user) {
        const picture = profile.photos
          ? profile.photos[0].value
          : 'https://res.cloudinary.com/halcika/image/upload/v1601248708/blank-user-img.jpg';
        const newUser = await new User({
          name:
            profile.displayName ||
            `${profile.name?.familyName} ${profile.name?.givenName}`,
          email,
          picture,
          subscription: {},
          socialIds: {
            [`${socialType}Id`]: profile.id,
          },
        }).save();
        return done(undefined, newUser, true);
      }
      if (!user.socialIds.get(`${socialType}Id` as idTypes)) {
        await user.updateOne({
          $set: { [`socialIds.${socialType}Id`]: profile.id },
        });
      }
      return done(undefined, user);
    } catch (error) {
      return done(error.message, null);
    }
  }

  private async passportCallback(
    err: Error | undefined,
    user: UserInterface,
    res: Response,
    isNewUser = false
  ) {
    const { url } = Configuration.appConfig;
    try {
      const { id, name } = user;
      if (err) return res.redirect(`${url}/?err=${err}`);

      const accessToken = this.jwt.signToken({ id, name });
      this.cookie.setRefreshToken(res, this.jwt.signToken({ id, name }, true));

      if (isNewUser) {
        return res.redirect(`${url}/?token=${accessToken}&new=jidjasoifjoa`);
      }

      return res.redirect(`${url}/?token=${accessToken}`);
    } catch (error) {
      return res.redirect(`${url}/?err=${error}`);
    }
  }
}

passport.serializeUser((user: UserInterface, done) => done(null, user._id));

passport.deserializeUser(async (id, done) => {
  const user = await User.findById(id);
  return done(null, user);
});

passport.use(
  new GoogleStrategy(
    {
      clientID: Configuration.appConfig.social.googleID,
      clientSecret: Configuration.appConfig.social.googleSecretID,
      callbackURL: Configuration.appConfig.social.googleCallBack,
    },
    (_, __, profile, done) =>
      PassportService.passportStrategy(profile as Profile, done, 'google')
  )
);

passport.use(
  new FacebookStrategy(
    {
      clientID: Configuration.appConfig.social.facebookID,
      clientSecret: Configuration.appConfig.social.facebookSecretID,
      callbackURL: Configuration.appConfig.social.facebookCallBack,
      profileFields: ['id', 'email', 'name'],
    },
    (_, __, profile, done) =>
      PassportService.passportStrategy(profile as Profile, done, 'facebook')
  )
);

passport.use(
  new TwitterStrategy(
    {
      consumerKey: Configuration.appConfig.social.twitterID,
      consumerSecret: Configuration.appConfig.social.twitterSecretID,
      callbackURL: Configuration.appConfig.social.twitterCallBack,
      includeEmail: true,
      userProfileURL:
        'https://api.twitter.com/1.1/account/verify_credentials.json?include_email=true',
    },
    (_, __, profile, done) =>
      PassportService.passportStrategy(profile as any, done, 'twitter')
  )
);

passport.use(
  new LinkedinStrategy(
    {
      clientID: Configuration.appConfig.social.linkedinID,
      clientSecret: Configuration.appConfig.social.linkedinSecretID,
      callbackURL: Configuration.appConfig.social.linkedinCallBack,
      // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
      // @ts-ignore
      scope: ['r_emailaddress', 'r_liteprofile'],
    },
    (_: any, __: any, profile: Profile, done: VerifyCallback) =>
      PassportService.passportStrategy(profile, done, 'linkedin')
  )
);

passport.use(
  new GitHubStrategy(
    {
      clientID: Configuration.appConfig.social.githubID,
      clientSecret: Configuration.appConfig.social.githubSecretID,
      callbackURL: Configuration.appConfig.social.githubCallBack,
    },
    (_: any, __: any, profile: GithubProfile, done: VerifyCallback) =>
      PassportService.passportStrategy(profile as Profile, done, 'github')
  )
);

passport.use(
  new SpotifyStrategy(
    {
      clientID: Configuration.appConfig.social.spotifyID,
      clientSecret: Configuration.appConfig.social.spotifySecretID,
      callbackURL: Configuration.appConfig.social.spotifyCallBack,
    },
    (_, __, profile, done) =>
      PassportService.passportStrategy(
        profile as any,
        done as VerifyCallback,
        'spotify'
      )
  )
);

export default passport;
