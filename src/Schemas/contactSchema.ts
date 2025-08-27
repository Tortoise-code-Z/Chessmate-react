import { z } from "zod";
import {
    EMAIL_REGULAR_EXPRESSION,
    MSG_EMPTY,
    MSG_FORMAT_EMAIL_INCORRECT,
    msgMaxCharacters,
} from "../consts/schemas";

export const contactSchema = z.object({
    name: z.string().min(1, { message: MSG_EMPTY }),
    email: z
        .string()
        .min(1, { message: MSG_EMPTY })
        .regex(EMAIL_REGULAR_EXPRESSION, {
            message: MSG_FORMAT_EMAIL_INCORRECT,
        }),
    subject: z
        .string()
        .min(1, { message: MSG_EMPTY })
        .max(50, { message: msgMaxCharacters(50) }),
    body: z
        .string()
        .min(1, { message: MSG_EMPTY })
        .max(200, { message: msgMaxCharacters(200) }),
});

export type ContactSchemaValues = z.infer<typeof contactSchema>;
