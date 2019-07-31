import { Request, Response } from 'express';
import { Constants } from 'src/modules/constants';

export function LanguageMiddleware(
  req: Request,
  res: Response,
  next: Function,
) {
  if (!req.query.lang) {
    req.query.lang = Constants.Language.EN;
  }
  next();
}
