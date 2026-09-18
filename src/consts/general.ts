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

export const IMAGES_PATH_RE = /.*_\d+x\d+_+.*/;
