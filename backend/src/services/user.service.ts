import { prisma } from '../prisma/client';

export const getUserById = async (id: number) => {
    return prisma.user.findUnique({ where: { id } });
};

export const getAllUsers = async () => {
    return prisma.user.findMany();
};
