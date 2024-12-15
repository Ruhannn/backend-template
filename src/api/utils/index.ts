import { Response } from 'express';

export function sendJson<T>(res: Response, { message, data, error }: { message: unknown; data?: T; error?: boolean }): void {
    res.json({
        success: error ? false : true,
        message: message,
        data: error ? [] : data,
    });
}


