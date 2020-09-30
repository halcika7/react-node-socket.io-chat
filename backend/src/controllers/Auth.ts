import { Controller } from '@decorator/class';
import { BaseController } from './Base';
import { Get } from '@decorator/method';
import { Req, Res, Cookie } from '@decorator/param';
import { Request, Response } from 'express';
import { Post } from '../utils/decorators/method';
import { CookieService } from '@service/Cookie';
import { HTTPCodes } from '@codes';
import { Configuration } from '@env';
import { AuthService } from '@service/auth/Auth';
import passport from '@service/Passport';
import { passportCallBack } from '@middleware/passportCallBack';

@Controller('/auth')
export class AuthController extends BaseController {
  private readonly cookie = CookieService;

  constructor(private readonly auth: AuthService) {
    super();
  }

  @Post('/logout')
  logout(@Res() res: Response, @Req() req: Request) {
    req.logout();
    req.logOut();
    this.cookie.removeRefreshToken(res);
    return this.sendResponse(res, HTTPCodes.OK, {});
  }

  @Get('/refresh')
  async refreshToken(
    @Cookie(Configuration.appConfig.webToken.REFRESH_TOKEN_NAME) token: string,
    @Res() res: Response
  ) {
    const { status, refreshToken, ...rest } = await this.auth.refreshToken(
      token
    );

    this.cookie.setRefreshToken(res, refreshToken || '');

    return this.sendResponse(res, status, { ...rest });
  }

  @Get(
    '/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
      prompt: 'select_account',
    })
  )
  google() {
    return null;
  }

  @Get('/google/callback', passportCallBack('google'))
  googleCallback() {
    return null;
  }

  @Get('/facebook', passport.authenticate('facebook', { scope: 'email' }))
  facebook() {
    return null;
  }

  @Get('/facebook/callback', passportCallBack('facebook'))
  facebookCallback() {
    return null;
  }

  @Get('/twitter', passport.authenticate('twitter', { scope: 'email' }))
  twitter() {
    return null;
  }

  @Get('/twitter/callback', passportCallBack('twitter'))
  twitterCallback() {
    return null;
  }

  @Get('/linkedin', passport.authenticate('linkedin'))
  linkedin() {
    return null;
  }

  @Get('/linkedin/callback', passportCallBack('linkedin'))
  linkedinCallback() {
    return null;
  }

  @Get('/github', passport.authenticate('github', { scope: ['user'] }))
  github() {
    return null;
  }

  @Get('/github/callback', passportCallBack('github'))
  githubCallback() {
    return null;
  }

  @Get(
    '/spotify',
    passport.authenticate('spotify', {
      scope: ['user-read-email', 'user-read-private'],
    })
  )
  spotify() {
    return null;
  }

  @Get('/spotify/callback', passportCallBack('spotify'))
  spotifyCallback() {
    return null;
  }
}
