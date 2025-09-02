import { DefaultCourseValues } from "../types/types";

export const CHESS_LEVEL = [
    "Sin título",
    "CM",
    "FM",
    "IM",
    "GM",
    "WCM",
    "WFM",
    "WIM",
    "WGM",
] as const;

export const LEVELS = [
    "Principiante",
    "Intermedio",
    "Avanzado",
    "Experto",
    "Master",
] as const;

export const FILTERS = ["Todos", ...LEVELS] as const;

export const DEFAULT_COURSES_VALUES: DefaultCourseValues = {
    title: "Sin título",
    createdAt: undefined,
    detailDescription: "Sin descrpción",
    shortDescription: "Sin descripción",
    level: "Sin nivel asignado",
    content: {
        detailDescription: "Sin descripción",
        themes: {
            title: "Sin título",
            description: "Sin descripción",
            content: {
                title: "Sin título",
            },
        },
    },
    sales: 0,
    toLearn: {
        detailDescription: "Sin descripción",
        themes: {
            title: "Sin título",
            description: "Sin descripción",
        },
    },
    progress: "Sin progreso",
    price: "Precio no disponible",
} as const;
