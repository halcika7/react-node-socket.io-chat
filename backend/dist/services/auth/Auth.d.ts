import { BaseService } from '../Base';
import { ResponseTokens } from '@ctypes';
import { AuthServiceInerface } from './AuthServiceI';
export declare class AuthService extends BaseService implements AuthServiceInerface {
    private readonly jwt;
    constructor();
    refreshToken(token: string): Promise<ResponseTokens>;
}
