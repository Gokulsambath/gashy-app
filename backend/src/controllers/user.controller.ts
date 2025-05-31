import { Request, Response } from 'express';
import * as userService from '../services/user.service';

export const getUser = async (req: Request, res: Response) => {
    try {
        const user = await userService.getUserById(Number(req.params.id));
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getUsers = async (_req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.json(users);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
