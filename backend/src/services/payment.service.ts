import { prisma } from '../prisma/client';

export const createPayment = async (data: any) => {
    return prisma.payment.create({ data });
};

export const getPaymentsByUser = async (userId: number) => {
    return prisma.payment.findMany({ where: { userId } });
};
