import { Request, Response } from 'express';
import { PassportService } from '@service/Passport';
import { providerType } from '@ctypes';

const passportService = new PassportService();

export const passportCallBack = (provider: providerType) => (
  req: Request,
  res: Response
) => passportService.socialCallback(req, res, provider);
