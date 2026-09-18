import { z } from "zod";
import type { TFunction } from "i18next";
import { CHESS_LEVEL } from "../consts/general";
import {
    EMAIL_REGULAR_EXPRESSION,
    PASSWORD_REGULAR_EXPRESSION,
    USERNAME_REGULAR_EXPRESSION,
} from "../consts/schemas";

/** Esquema de registro. Construido con `t` para mensajes en el idioma activo. */
export const registerSchema = (t: TFunction) =>
    z
        .object({
            username: z
                .string()
                .min(1, { message: t("empty") })
                .min(3, { message: t("minChars", { count: 3 }) })
                .regex(USERNAME_REGULAR_EXPRESSION, {
                    message: t("usernameFormat"),
                })
                .max(15, { message: t("maxChars", { count: 15 }) }),
            email: z
                .string()
                .min(1, { message: t("empty") })
                .regex(EMAIL_REGULAR_EXPRESSION, {
                    message: t("emailFormat"),
                }),
            elo: z
                .number({
                    coerce: true,
                    invalid_type_error: t("onlyNumbers"),
                })
                .min(0, { message: t("minElo", { count: 1 }) })
                .max(3600, { message: t("maxElo", { count: 3600 }) })
                .optional(),
            title: z.enum(CHESS_LEVEL),
            password: z
                .string()
                .min(8, { message: t("minChars", { count: 8 }) })
                .regex(PASSWORD_REGULAR_EXPRESSION, {
                    message: t("passwordFormat"),
                }),
            repeatPassword: z.string(),
            terms: z.literal(true, {
                errorMap: () => ({
                    message: t("terms"),
                }),
            }),
        })
        .refine((data) => data.password === data.repeatPassword, {
            path: ["repeatPassword"],
            message: t("repeatPassword"),
        });

export type registerSchemaValues = z.infer<ReturnType<typeof registerSchema>>;
