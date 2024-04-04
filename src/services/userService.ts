import * as userModel from '../models/userModel';
import { User } from '../interfaces/userInterface';

export const getAllUsers = (): User[] => {
    // Business logic to get all users
    return userModel.findAll();
};

export const createUser = (userData: User): User => {
    // Business logic to create a new user
    return userModel.create(userData);
};

export const getUserById = (id: number): User => {
    return userModel.findById(id);
}
