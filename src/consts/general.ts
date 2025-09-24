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
export const PIECE_TITLE_DEFAULT_MSG = "Pieza";
export const PROGRESS_DEFAULT_MSG = "Sin progreso";
export const LEVEL_DEFAULT_MSG = "Sin nivel asignado";
export const TITLE_DEFAULT_MSG = "Sin título";
export const DESCRIPTION_DEFAULT_MSG = "Sin descripción.";
export const PRICE_DEFAULT_MSG = "N/A";
export const CHESSLEVEL_DEFAUL_MSG = "N/A";
export const DATE_DEFAULT_MSG = "N/A";
export const ELO_DEFAULT_MSG = "N/A";
export const SCORE_DEFAULT_MSG = "N/A";
export const RANK_DEFAULT_MSG = "N/A";
export const AUTHOR_DEFAULT_MSG = "Autor/a";
export const USER_DEFAULT_MSG = "Usuario/a";
export const OPINION_DEFAULT_MSG = "No hay opinión.";
