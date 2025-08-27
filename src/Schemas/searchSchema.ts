import { z } from "zod";
import { MSG_EMPTY } from "../consts/schemas";

export const searchSchema = z.object({
    search: z.string().min(1, { message: MSG_EMPTY }),
});

export type searchSchemaValues = z.infer<typeof searchSchema>;
