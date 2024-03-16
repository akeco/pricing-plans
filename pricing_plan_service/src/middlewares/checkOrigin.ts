import { Request, Response, NextFunction } from 'express';

const ALLOWED_ORIGIN = 'http://localhost';

export const checkOrigin = (req: Request, res: Response, next: NextFunction) => {
  const origin = req.headers['origin'];

  // Check if the request is coming from your public website
  if (origin && origin.includes(ALLOWED_ORIGIN)) {
    // Request is from your public website, continue with handling the request
    next();
  } else {
    // Request is not from your public website, return unauthorized
    res.status(403).json({ error: 'Forbidden' });
  }
}