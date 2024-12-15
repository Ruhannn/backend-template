import { Request, Response } from "express";
import { sendJson } from "../utils";
import { testValidationSchema } from "../validation";

export const test = async (req: Request, res: Response) => {
    const { name, age } = req.body;
    const data = {
        name: name,
        age: age,
    };

    const validationResult = testValidationSchema.safeParse(data);

    if (!validationResult.success) {
        return sendJson(res, {
            error: true,
            message: validationResult.error.errors,
        });
    }

    return sendJson(res, {
        message: "user",
        data: data,
    });
};
