import { z } from "zod";
import {
    MSG_EMPTY,
    MSG_FORMAT_USERNAME_INCORRECT,
    USERNAME_REGULAR_EXPRESSION,
} from "../consts/schemas";

export const loginSchema = z.object({
    username: z
        .string()
        .min(1, { message: MSG_EMPTY })
        .regex(USERNAME_REGULAR_EXPRESSION, {
            message: MSG_FORMAT_USERNAME_INCORRECT,
        }),
    password: z.string().min(1, { message: MSG_EMPTY }),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
