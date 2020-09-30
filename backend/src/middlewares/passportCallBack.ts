import { Request, Response } from 'express';
import { PassportService } from '@service/Passport';

const passportService = new PassportService();

type providerType =
  | 'google'
  | 'facebook'
  | 'twitter'
  | 'linkedin'
  | 'github'
  | 'spotify';

export const passportCallBack = (provider: providerType) => (
  req: Request,
  res: Response
) => passportService.socialCallback(req, res, provider);
