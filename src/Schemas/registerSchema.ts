import { z } from "zod";
import { CHESS_LEVEL } from "../consts/general";
import {
    EMAIL_REGULAR_EXPRESSION,
    MSG_EMPTY,
    MSG_FORMAT_EMAIL_INCORRECT,
    MSG_FORMAT_PASSWORD_INCORRECT,
    MSG_FORMAT_REPEAT_PASSWORD_INCORRECT,
    MSG_FORMAT_USERNAME_INCORRECT,
    MSG_ONLY_NUMBERS,
    MSG_TERMS,
    msgMaxCharacters,
    msgMaxELO,
    msgMinCharacters,
    msgMinELO,
    PASSWORD_REGULAR_EXPRESSION,
    USERNAME_REGULAR_EXPRESSION,
} from "../consts/schemas";

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(1, { message: MSG_EMPTY })
            .min(3, { message: msgMinCharacters(3) })
            .regex(USERNAME_REGULAR_EXPRESSION, {
                message: MSG_FORMAT_USERNAME_INCORRECT,
            })

            .max(15, { message: msgMaxCharacters(15) }),
        email: z
            .string()
            .min(1, { message: MSG_EMPTY })
            .regex(EMAIL_REGULAR_EXPRESSION, {
                message: MSG_FORMAT_EMAIL_INCORRECT,
            }),
        elo: z
            .number({
                coerce: true,
                invalid_type_error: MSG_ONLY_NUMBERS,
            })
            .min(0, { message: msgMinELO(1) })
            .max(3600, { message: msgMaxELO(3600) })
            .optional(),
        title: z.enum(CHESS_LEVEL),
        password: z
            .string()
            .min(8, { message: msgMinCharacters(8) })
            .regex(PASSWORD_REGULAR_EXPRESSION, {
                message: MSG_FORMAT_PASSWORD_INCORRECT,
            }),

        repeatPassword: z.string(),
        terms: z.literal(true, {
            errorMap: () => ({
                message: MSG_TERMS,
            }),
        }),
    })
    .refine(
        (data) => {
            return data.password === data.repeatPassword;
        },
        {
            path: ["repeatPassword"],
            message: MSG_FORMAT_REPEAT_PASSWORD_INCORRECT,
        }
    );

export type registerSchemaValues = z.infer<typeof registerSchema>;
