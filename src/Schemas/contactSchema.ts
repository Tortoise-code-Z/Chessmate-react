import { z } from "zod";
import type { TFunction } from "i18next";
import {
    EMAIL_REGULAR_EXPRESSION,
} from "../consts/schemas";

/** Esquema del formulario de contacto. */
export const contactSchema = (t: TFunction) =>
    z.object({
        name: z.string().min(1, { message: t("empty") }),
        email: z
            .string()
            .min(1, { message: t("empty") })
            .regex(EMAIL_REGULAR_EXPRESSION, {
                message: t("emailFormat"),
            }),
        subject: z
            .string()
            .min(1, { message: t("empty") })
            .max(50, { message: t("maxChars", { count: 50 }) }),
        body: z
            .string()
            .min(1, { message: t("empty") })
            .max(200, { message: t("maxChars", { count: 200 }) }),
    });

export type ContactSchemaValues = z.infer<ReturnType<typeof contactSchema>>;
