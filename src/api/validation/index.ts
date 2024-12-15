import { z } from "zod";
import { ITestSchema } from "../@types";

const testValidationSchema: z.ZodType<ITestSchema> = z.object({
    name: z.string().min(3).max(30),
    age: z.number().int().max(99),
});

export { testValidationSchema }