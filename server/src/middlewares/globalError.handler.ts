
import { NextFunction, Request, Response } from "express";

interface CustomError extends Error {
    status?: number;
    errors?: unknown;
}

export const globalErrorHandler = (error: CustomError, req: Request, res: Response, next: NextFunction) => {
    const statusCode = error.status || 500;
    const errorResponse = {
        success: false,
        message: error.message || 'An unexpected error occurred',
        error: {
            name: error.name || 'InternalServerError',
            errors: error.errors || error
        }
    };
    res.status(statusCode).send(errorResponse);
    next();
}