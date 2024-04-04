import { User } from '../interfaces/userInterface';


let users: User[] = [];

export const findAll = (): User[] => {

    return users;
};

export const create = (userData: User): User => {
    const newUser = {
        id: Date.now(),
        ...userData
    };

    users.push(newUser);
    return newUser;
};

export const findById = (id: number): User | undefined => {
    return users.find(user => user.id === id);
};

export const updateById = (id: number, userData: Partial<User>): User | undefined => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return undefined;
    }

    users[userIndex] = { ...users[userIndex], ...userData };
    return users[userIndex];
};

export const deleteById = (id: number): boolean => {
    const userIndex = users.findIndex(user => user.id === id);

    if (userIndex === -1) {
        return false;
    }

    users.splice(userIndex, 1);
    return true;
};
