import { z } from "zod";

export const searchSchema = z.object({
    search: z
        .string()
        .min(1, { message: "No puede dejar este espacio vacío..." }),
});

export type searchSchemaValues = z.infer<typeof searchSchema>;
