export declare abstract class JWTService {
    private static readonly access_secret;
    private static readonly refresh_secret;
    private static getSecret;
    private static getExpires;
    static verifyToken(token: string, refresh?: boolean): string | object;
    static signToken<T extends object>(payload: T, refresh?: boolean): string;
    static signActivationToken<T extends object>(payload: T): string;
}
