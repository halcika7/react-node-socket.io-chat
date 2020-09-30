import { ResponseTokens } from '@ctypes';
export interface AuthServiceInerface {
    refreshToken(token: string): Promise<ResponseTokens>;
}
