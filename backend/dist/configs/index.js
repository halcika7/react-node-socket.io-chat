"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Configuration = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _dotenv = require("dotenv");

/* eslint-disable @typescript-eslint/no-empty-function */
(0, _dotenv.config)();
var _process$env = process.env,
    NODE_ENV = _process$env.NODE_ENV,
    URL = _process$env.URL,
    MONGO_URI = _process$env.MONGO_URI,
    LOGGING_DEFAULT_LEVEL = _process$env.LOGGING_DEFAULT_LEVEL,
    LOGGING_ERROR_FILE_PATH = _process$env.LOGGING_ERROR_FILE_PATH,
    LOGGING_FILE_PATH = _process$env.LOGGING_FILE_PATH,
    PORT = _process$env.PORT,
    ACCESS_TOKEN_SECRET = _process$env.ACCESS_TOKEN_SECRET,
    REFRESH_TOKEN_SECRET = _process$env.REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_NAME = _process$env.REFRESH_TOKEN_NAME,
    REFRESH_TOKEN_PATH = _process$env.REFRESH_TOKEN_PATH,
    GOOGLE_CLIENT_ID = _process$env.GOOGLE_CLIENT_ID,
    GOOGLE_CLIENT_SECRET = _process$env.GOOGLE_CLIENT_SECRET,
    FACEBOOK_CLIENT_ID = _process$env.FACEBOOK_CLIENT_ID,
    FACEBOOK_CLIENT_SECRET = _process$env.FACEBOOK_CLIENT_SECRET,
    TWITTER_CLIENT_ID = _process$env.TWITTER_CLIENT_ID,
    TWITTER_CLIENT_SECRET = _process$env.TWITTER_CLIENT_SECRET,
    LINKEDIN_CLIENT_ID = _process$env.LINKEDIN_CLIENT_ID,
    LINKEDIN_CLIENT_SECRET = _process$env.LINKEDIN_CLIENT_SECRET,
    GITHUB_CLIENT_ID = _process$env.GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET = _process$env.GITHUB_CLIENT_SECRET,
    SPOTIFY_CLIENT_ID = _process$env.SPOTIFY_CLIENT_ID,
    SPOTIFY_CLIENT_SECRET = _process$env.SPOTIFY_CLIENT_SECRET,
    BACKEND_URL = _process$env.BACKEND_URL;
var SERVER_URL = NODE_ENV === 'production' ? "".concat(BACKEND_URL, "/api/auth/") : 'http://localhost:5000/api/auth/';

var Configuration = function Configuration() {
  (0, _classCallCheck2["default"])(this, Configuration);
};

exports.Configuration = Configuration;
(0, _defineProperty2["default"])(Configuration, "appConfig", {
  appName: 'backend',
  environment: NODE_ENV,
  url: URL,
  db: {
    MONGO_URI: MONGO_URI
  },
  logging: {
    defaultLevel: LOGGING_DEFAULT_LEVEL,
    errorLogsPath: LOGGING_ERROR_FILE_PATH,
    logsPath: LOGGING_FILE_PATH
  },
  server: {
    PORT: parseInt(PORT, 10),
    BACKEND_URL: BACKEND_URL
  },
  webToken: {
    ACCESS_SECRET: ACCESS_TOKEN_SECRET,
    REFRESH_SECRET: REFRESH_TOKEN_SECRET,
    REFRESH_TOKEN_NAME: REFRESH_TOKEN_NAME,
    REFRESH_TOKEN_PATH: REFRESH_TOKEN_PATH
  },
  social: {
    googleID: GOOGLE_CLIENT_ID,
    googleSecretID: GOOGLE_CLIENT_SECRET,
    googleCallBack: "".concat(SERVER_URL, "google/callback"),
    facebookID: FACEBOOK_CLIENT_ID,
    facebookSecretID: FACEBOOK_CLIENT_SECRET,
    facebookCallBack: "".concat(SERVER_URL, "facebook/callback"),
    twitterID: TWITTER_CLIENT_ID,
    twitterSecretID: TWITTER_CLIENT_SECRET,
    twitterCallBack: "".concat(SERVER_URL, "twitter/callback"),
    linkedinID: LINKEDIN_CLIENT_ID,
    linkedinSecretID: LINKEDIN_CLIENT_SECRET,
    linkedinCallBack: "".concat(SERVER_URL, "linkedin/callback"),
    githubID: GITHUB_CLIENT_ID,
    githubSecretID: GITHUB_CLIENT_SECRET,
    githubCallBack: "".concat(SERVER_URL, "github/callback"),
    spotifyID: SPOTIFY_CLIENT_ID,
    spotifySecretID: SPOTIFY_CLIENT_SECRET,
    spotifyCallBack: "".concat(SERVER_URL, "spotify/callback")
  }
});