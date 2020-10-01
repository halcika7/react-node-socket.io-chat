/* eslint-disable security/detect-object-injection */
import { BaseService } from '../Base';
import { JWTService } from '../JWT';
import { ResponseTokens, Token } from '@ctypes';
import { HTTPCodes } from '@codes';
import { Injectable } from '@decorator/class';
import { AuthServiceInerface } from './AuthServiceI';

@Injectable()
export class AuthService extends BaseService implements AuthServiceInerface {
  private readonly jwt = JWTService;

  constructor() {
    super();
  }

  async refreshToken(token: string): Promise<ResponseTokens> {
    const { id, role } = (await this.jwt.verifyToken(token, true)) as Token;

    return this.returnResponseTokens({
      status: HTTPCodes.OK,
      message: '',
      accessToken: this.jwt.signToken({ id, role }),
      refreshToken: this.jwt.signToken({ id, role }, true),
    });
  }
}
