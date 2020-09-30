interface ServerConfig {
    PORT: number;
    BACKEND_URL: string;
}
interface DbConfig {
    MONGO_URI: string;
}
interface LoggingConfig {
    defaultLevel: string;
    logsPath: string;
    errorLogsPath: string;
}
interface WebToken {
    ACCESS_SECRET: string;
    REFRESH_SECRET: string;
    REFRESH_TOKEN_NAME: string;
    REFRESH_TOKEN_PATH: string;
}
interface Social {
    googleID: string;
    googleSecretID: string;
    googleCallBack: string;
    facebookID: string;
    facebookSecretID: string;
    facebookCallBack: string;
    twitterID: string;
    twitterSecretID: string;
    twitterCallBack: string;
    linkedinID: string;
    linkedinSecretID: string;
    linkedinCallBack: string;
    githubID: string;
    githubSecretID: string;
    githubCallBack: string;
    spotifyID: string;
    spotifySecretID: string;
    spotifyCallBack: string;
}
interface AppConfig {
    appName: string;
    url: string;
    environment: string;
    db: DbConfig;
    server: ServerConfig;
    logging: LoggingConfig;
    webToken: WebToken;
    social: Social;
}
export declare class Configuration {
    private constructor();
    static appConfig: AppConfig;
}
export {};
