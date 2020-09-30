/* eslint-disable @typescript-eslint/no-empty-function */
import { config } from 'dotenv';
import { getServiceIdentifierAsString } from 'inversify';

config();

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

const {
  NODE_ENV,
  URL,
  MONGO_URI,
  LOGGING_DEFAULT_LEVEL,
  LOGGING_ERROR_FILE_PATH,
  LOGGING_FILE_PATH,
  PORT,
  ACCESS_TOKEN_SECRET,
  REFRESH_TOKEN_SECRET,
  REFRESH_TOKEN_NAME,
  REFRESH_TOKEN_PATH,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  FACEBOOK_CLIENT_ID,
  FACEBOOK_CLIENT_SECRET,
  TWITTER_CLIENT_ID,
  TWITTER_CLIENT_SECRET,
  LINKEDIN_CLIENT_ID,
  LINKEDIN_CLIENT_SECRET,
  GITHUB_CLIENT_ID,
  GITHUB_CLIENT_SECRET,
  SPOTIFY_CLIENT_ID,
  SPOTIFY_CLIENT_SECRET,
  BACKEND_URL,
} = process.env;

const SERVER_URL =
  NODE_ENV === 'production'
    ? `${BACKEND_URL}/api/auth/`
    : 'http://localhost:5000/api/auth/';

export class Configuration {
  private constructor() {}

  static appConfig: AppConfig = {
    appName: 'backend',
    environment: NODE_ENV as string,
    url: URL as string,
    db: {
      MONGO_URI,
    } as DbConfig,
    logging: {
      defaultLevel: LOGGING_DEFAULT_LEVEL,
      errorLogsPath: LOGGING_ERROR_FILE_PATH,
      logsPath: LOGGING_FILE_PATH,
    } as LoggingConfig,
    server: {
      PORT: parseInt(PORT as string, 10),
      BACKEND_URL,
    } as ServerConfig,
    webToken: {
      ACCESS_SECRET: ACCESS_TOKEN_SECRET,
      REFRESH_SECRET: REFRESH_TOKEN_SECRET,
      REFRESH_TOKEN_NAME,
      REFRESH_TOKEN_PATH,
    } as WebToken,
    social: {
      googleID: GOOGLE_CLIENT_ID as string,
      googleSecretID: GOOGLE_CLIENT_SECRET as string,
      googleCallBack: `${SERVER_URL}google/callback`,
      facebookID: FACEBOOK_CLIENT_ID as string,
      facebookSecretID: FACEBOOK_CLIENT_SECRET as string,
      facebookCallBack: `${SERVER_URL}facebook/callback`,
      twitterID: TWITTER_CLIENT_ID as string,
      twitterSecretID: TWITTER_CLIENT_SECRET as string,
      twitterCallBack: `${SERVER_URL}twitter/callback`,
      linkedinID: LINKEDIN_CLIENT_ID as string,
      linkedinSecretID: LINKEDIN_CLIENT_SECRET as string,
      linkedinCallBack: `${SERVER_URL}linkedin/callback`,
      githubID: GITHUB_CLIENT_ID as string,
      githubSecretID: GITHUB_CLIENT_SECRET as string,
      githubCallBack: `${SERVER_URL}github/callback`,
      spotifyID: SPOTIFY_CLIENT_ID as string,
      spotifySecretID: SPOTIFY_CLIENT_SECRET as string,
      spotifyCallBack: `${SERVER_URL}spotify/callback`,
    },
  };
}
