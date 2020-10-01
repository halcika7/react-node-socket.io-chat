export interface Token {
  id: number;
  role: string;
}

export type providerType =
  | 'google'
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'github'
  | 'spotify';
export type idTypes =
  | 'googleId'
  | 'facebookId'
  | 'twitterId'
  | 'linkedinId'
  | 'githubId'
  | 'spotifyId';
