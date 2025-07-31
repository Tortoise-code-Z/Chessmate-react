import { z } from "zod";

export const loginSchema = z.object({
    username: z
        .string()
        .min(1, { message: "No puede dejar este campo vacío" })
        .regex(/^[a-z0-9_]+$/, {
            message: "Solo minúsculas, números y '_'.",
        }),
    password: z.string().min(1, { message: "No puede dejar este campo vacío" }),
});

export type LoginSchemaValues = z.infer<typeof loginSchema>;
