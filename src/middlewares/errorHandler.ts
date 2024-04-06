import { Request, Response, ErrorRequestHandler, NextFunction } from 'express';

const errorHandler: ErrorRequestHandler = (err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
}

export default errorHandler;
