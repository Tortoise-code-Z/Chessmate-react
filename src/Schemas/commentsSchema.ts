import { z } from "zod";

export const commentsSchema = z.object({
    comment: z
        .string()
        .min(1, { message: "No puede dejar este espacio vacío..." }),
});

export type commentsSchemaValues = z.infer<typeof commentsSchema>;
