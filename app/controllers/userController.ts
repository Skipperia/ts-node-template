import { Request, Response } from 'express';
import * as userService from '../services/userService';

export const getAllUsers = (req: Request, res: Response): void => {
    const users = userService.getAllUsers();
    res.json(users);
};

export const createUser = (req: Request, res: Response): void => {
    const newUser = userService.createUser(req.body);
    res.status(201).json(newUser);
};
