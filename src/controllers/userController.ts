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


export const getUserById = (req: Request, res: Response): void => {
    const userIdInput = req.params.userId;
    const userId = Number(userIdInput);
    const user = userService.getUserById(userId);
    if (!user) {
        res.status(404).json({ error: 'User not found' });
    } else {
        res.json(user);
    }
};