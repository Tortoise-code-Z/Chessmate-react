// Configuración de idiomas soportados por la app (multilenguaje).
// Fuente única de verdad para el resto del código i18n.

export const SUPPORTED_LANGUAGES = ["es", "en"] as const;

export type Language = (typeof SUPPORTED_LANGUAGES)[number];

/** Idioma por defecto y de fallback. */
export const DEFAULT_LANGUAGE: Language = "es";

/** Clave de localStorage donde el detector persiste la elección del usuario. */
export const I18N_STORAGE_KEY = "chessmate_lang";

/** Etiquetas legibles del idioma en su propio idioma (para el selector). */
export const LANGUAGE_LABELS: Record<Language, string> = {
    es: "Español",
    en: "English",
};

/** Type guard: ¿es `value` un idioma soportado? */
export const isSupportedLanguage = (value: string): value is Language =>
    (SUPPORTED_LANGUAGES as readonly string[]).includes(value);

/**
 * Normaliza cualquier entrada de idioma (p. ej. "en-US", "es-ES", null) a un
 * idioma soportado, cayendo al idioma por defecto cuando no hay coincidencia.
 */
export const normalizeLanguage = (
    input: string | undefined | null
): Language => {
    if (!input) return DEFAULT_LANGUAGE;
    const base = input.toLowerCase().split("-")[0];
    return isSupportedLanguage(base) ? base : DEFAULT_LANGUAGE;
};
