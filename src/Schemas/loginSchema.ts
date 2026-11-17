import { z } from "zod";
import type { TFunction } from "i18next";
import { USERNAME_REGULAR_EXPRESSION } from "../consts/schemas";

/** Esquema de login. Construido con `t` para mensajes en el idioma activo. */
export const loginSchema = (t: TFunction) =>
    z.object({
        username: z
            .string()
            .min(1, { message: t("empty") })
            .regex(USERNAME_REGULAR_EXPRESSION, {
                message: t("usernameFormat"),
            }),
        password: z.string().min(1, { message: t("empty") }),
    });

export type LoginSchemaValues = z.infer<ReturnType<typeof loginSchema>>;
