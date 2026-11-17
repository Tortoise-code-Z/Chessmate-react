import { z } from "zod";
import type { TFunction } from "i18next";

/** Esquema de búsqueda de cursos. */
export const searchSchema = (t: TFunction) =>
    z.object({
        search: z.string().min(1, { message: t("empty") }),
    });

export type searchSchemaValues = z.infer<ReturnType<typeof searchSchema>>;
