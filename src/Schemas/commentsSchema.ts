import { z } from "zod";
import { MSG_EMPTY } from "../consts/schemas";

export const commentsSchema = z.object({
    comment: z.string().min(1, { message: MSG_EMPTY }),
});

export type commentsSchemaValues = z.infer<typeof commentsSchema>;
