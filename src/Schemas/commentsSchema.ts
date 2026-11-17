import { z } from "zod";
import type { TFunction } from "i18next";

/** Esquema del formulario de comentarios. */
export const commentsSchema = (t: TFunction) =>
    z.object({
        comment: z.string().min(1, { message: t("empty") }),
    });

export type commentsSchemaValues = z.infer<ReturnType<typeof commentsSchema>>;
