import { Request, Response } from 'express';
import * as paymentService from '../services/payment.service';

export const createPayment = async (req: Request, res: Response) => {
    try {
        const payment = await paymentService.createPayment(req.body);
        res.status(201).json(payment);
    } catch (error: any) {
        res.status(400).json({ message: error.message });
    }
};

export const getUserPayments = async (req: Request, res: Response) => {
    try {
        const payments = await paymentService.getPaymentsByUser(Number(req.params.userId));
        res.json(payments);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};
