import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { PrismaClient } from '@prisma/client';
import Redis from 'ioredis';
import routes from './routes';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
const prisma = new PrismaClient();
const redis = new Redis(process.env.REDIS_URL);

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Attach prisma & redis clients to request object for easy access in routes/services
app.use((req, res, next) => {
    (req as any).prisma = prisma;
    (req as any).redis = redis;
    next();
});

// API Routes
app.use('/api', routes);

// Error handling middleware
app.use(errorHandler);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
    await prisma.$disconnect();
    redis.disconnect();
    process.exit(0);
});
