import { Request, Response } from 'express';
import * as gameService from '../services/game.service';

export const getGames = async (_req: Request, res: Response) => {
    try {
        const games = await gameService.getAllGames();
        res.json(games);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const getGame = async (req: Request, res: Response) => {
    try {
        const game = await gameService.getGameById(Number(req.params.id));
        if (!game) return res.status(404).json({ message: 'Game not found' });
        res.json(game);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

export const createGame = async (req: Request, res: Response) => {
    try {
        const game = await gameService.createGame(req.body);
        res.status(201).json(game);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const updateGame = async (req: Request, res: Response) => {
    try {
        const game = await gameService.updateGame(Number(req.params.id), req.body);
        res.json(game);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const deleteGame = async (req: Request, res: Response) => {
    try {
        await gameService.deleteGame(Number(req.params.id));
        res.status(204).send();
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};
