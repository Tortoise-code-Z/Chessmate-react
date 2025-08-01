import { z } from "zod";

export const contactSchema = z.object({
    name: z.string().min(1, { message: "No puede dejar este campo vacío." }),
    email: z
        .string()
        .min(1, { message: "No puede dejar este campo vacío." })
        .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
            message:
                "Por favor, cíñase al formato correcto: example@example.com",
        }),
    subject: z
        .string()
        .min(1, { message: "No puede dejar este campo vacío." })
        .max(50, { message: "No debe exeder los 50 caracteres." }),
    body: z
        .string()
        .min(1, { message: "No puede dejar este campo vacío." })
        .max(200, { message: "No debe exeder los 200 caracteres." }),
});

export type ContactSchemaValues = z.infer<typeof contactSchema>;
