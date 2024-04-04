import { Request, Response, NextFunction } from 'express';

const loggerMiddleware = (req: Request, res: Response, next: NextFunction): void => {
    console.log(`Request received: ${req.method} ${req.url}`);
    next();
}

export default loggerMiddleware;
