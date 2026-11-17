import { describe, it, expect } from "vitest";
import { normalizeLanguage, DEFAULT_LANGUAGE } from "./i18n";

describe("normalizeLanguage", () => {
    it("acepta idiomas soportados", () => {
        expect(normalizeLanguage("es")).toBe("es");
        expect(normalizeLanguage("en")).toBe("en");
    });

    it("normaliza variantes regionales al idioma base", () => {
        expect(normalizeLanguage("en-US")).toBe("en");
        expect(normalizeLanguage("es-ES")).toBe("es");
    });

    it("cae al idioma por defecto ante entradas no soportadas o vacías", () => {
        expect(normalizeLanguage("fr")).toBe(DEFAULT_LANGUAGE);
        expect(normalizeLanguage(undefined)).toBe(DEFAULT_LANGUAGE);
        expect(normalizeLanguage(null)).toBe(DEFAULT_LANGUAGE);
        expect(normalizeLanguage("")).toBe(DEFAULT_LANGUAGE);
    });
});
