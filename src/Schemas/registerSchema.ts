import { coerce, z } from "zod";
import { CHESS_LEVEL } from "../consts/general";
import errorMap from "zod/locales/en.js";

export const registerSchema = z
    .object({
        username: z
            .string()
            .min(1, { message: "No puede dejar este espacio vacío..." })
            .min(3, { message: "Debe ser mayor a 3 caracteres" })
            .regex(/^[a-z0-9_]+$/, {
                message: "Solo minúsculas, números y '_'.",
            })

            .max(15, { message: "No puede superar los 15 caracteres." }),
        email: z
            .string()
            .min(1, { message: "No puede dejar este espacio vacío..." })
            .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
                message:
                    "Por favor, cíñase al formato correcto: example@example.com",
            }),
        elo: z
            .number({
                coerce: true,
                invalid_type_error: "Debe ser un número...",
            })
            .min(0, { message: "Debes tener al menos 1 punto ELO..." })
            .max(3600, { message: "No puedes superar 3600 ELO.." })
            .optional(),
        title: z.enum(CHESS_LEVEL),
        password: z
            .string()
            .min(8, { message: "Mínimo de 8 caracteres" })
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).*$/,
                {
                    message:
                        "Debe tener al menos una mayúsucla, número y símbolo.",
                }
            ),

        repeatPassword: z.string(),
        terms: z.literal(true, {
            errorMap: () => ({
                message: "Debes aceptar los términos y condiciones.",
            }),
        }),
    })
    .refine((data) => data.password === data.repeatPassword, {
        path: ["repeaPassword"],
        message: "Las contraseñas no coinciden.",
    });

export type registerSchemaValues = z.infer<typeof registerSchema>;
