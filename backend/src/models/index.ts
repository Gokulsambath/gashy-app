export interface IUser {
    id: number;
    googleId: string;
    email: string;
    name?: string;
    coins: number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ISession {
    id: number;
    userId: number;
    token: string;
    createdAt: Date;
    expiresAt: Date;
}

export interface IPayment {
    id: number;
    userId: number;
    amount: number;
    status: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IGame {
    id: number;
    name: string;
    description?: string;
    imageUrl?: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface IGameSession {
    id: number;
    gameId: number;
    player1Id: number;
    player2Id: number;
    winnerId?: number | null;
    startedAt: Date;
    endedAt?: Date | null;
    createdAt: Date;
}
