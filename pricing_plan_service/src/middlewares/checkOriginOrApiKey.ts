import { Request, Response, NextFunction } from 'express';

const ALLOWED_ORIGIN = 'http://localhost';

export const checkOriginOrApiKey = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers['origin'];
  const apiKey = req.headers['x-api-key'];

  if ((origin && origin.includes(ALLOWED_ORIGIN)) || (apiKey && apiKey === process.env.API_KEY)) {
    next();
  }
  else if (origin && !origin.includes(ALLOWED_ORIGIN)) {
    return res.status(403).json({ error: 'Forbidden' });
  }
  else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}