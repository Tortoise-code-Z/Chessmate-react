import { describe, it, expect } from "vitest";
import {
    pick,
    pickList,
    resolveAuthor,
    resolveCourse,
    resolveDefaultCourse,
    resolveOpinion,
} from "./localize";
import type {
    StoredAuthor,
    StoredCourse,
    StoredDefaultCourse,
    StoredOpinion,
} from "../types/types";

describe("pick / pickList", () => {
    it("escoge la variante escalar del idioma", () => {
        expect(pick({ es: "hola", en: "hi" }, "es")).toBe("hola");
        expect(pick({ es: "hola", en: "hi" }, "en")).toBe("hi");
    });

    it("escoge la variante lista del idioma", () => {
        const list = { es: ["a", "b"], en: ["x", "y"] };
        expect(pickList(list, "es")).toEqual(["a", "b"]);
        expect(pickList(list, "en")).toEqual(["x", "y"]);
    });
});

const author: StoredAuthor = {
    id: 1,
    name: { es: "Laura Vega", en: "Laura Vega" },
    description: { es: "Gran Maestra.", en: "Grandmaster." },
    level: "GM",
    elo: 2550,
    image: "a.webp",
};

describe("resolveAuthor", () => {
    it("resuelve name/description y conserva level/elo/image", () => {
        const en = resolveAuthor(author, "en");
        expect(en.name).toBe("Laura Vega");
        expect(en.description).toBe("Grandmaster.");
        expect(en.level).toBe("GM"); // taxonomía, no se localiza (ADR-009)
        expect(en.elo).toBe(2550);
        expect(en.image).toBe("a.webp");
        expect(resolveAuthor(author, "es").description).toBe("Gran Maestra.");
    });
});

const course: StoredCourse = {
    courseID: 1,
    title: { es: "Peones", en: "Pawns" },
    level: "Principiante",
    imageUrl: { general: "g.webp", full: "f.webp", thumb: "t.webp" },
    createdAt: "2024-01-01",
    sales: 10,
    shortDescription: { es: "corto", en: "short" },
    detailDescription: { es: "detalle", en: "detail" },
    price: 9.99,
    content: {
        themes: [
            {
                id: 1,
                title: { es: "Tema", en: "Theme" },
                description: { es: "descripción", en: "description" },
                content: [
                    {
                        id: 1,
                        title: { es: "Subtema", en: "Subtheme" },
                        cover: "c.webp",
                        video: "v.mp4",
                    },
                ],
            },
        ],
        detailDescription: { es: ["p1"], en: ["q1"] },
    },
    toLearn: {
        themes: [
            {
                id: 1,
                title: { es: "Aprender", en: "Learn" },
                description: { es: "meta", en: "goal" },
            },
        ],
        detailDescription: { es: ["l-es"], en: ["l-en"] },
    },
    authors: [1, 2],
};

describe("resolveCourse", () => {
    it("resuelve todo el texto al inglés y conserva no-localizables", () => {
        const c = resolveCourse(course, "en");
        expect(c.title).toBe("Pawns");
        expect(c.shortDescription).toBe("short");
        expect(c.detailDescription).toBe("detail");
        expect(c.content.themes[0].title).toBe("Theme");
        expect(c.content.themes[0].description).toBe("description");
        expect(c.content.themes[0].content[0].title).toBe("Subtheme");
        expect(c.content.detailDescription).toEqual(["q1"]);
        expect(c.toLearn.themes[0].title).toBe("Learn");
        expect(c.toLearn.detailDescription).toEqual(["l-en"]);
        // no-localizables
        expect(c.level).toBe("Principiante");
        expect(c.price).toBe(9.99);
        expect(c.imageUrl.full).toBe("f.webp");
        expect(c.content.themes[0].content[0].video).toBe("v.mp4");
        expect(c.authors).toEqual([1, 2]);
    });

    it("resuelve en español", () => {
        const c = resolveCourse(course, "es");
        expect(c.title).toBe("Peones");
        expect(c.content.detailDescription).toEqual(["p1"]);
        expect(c.toLearn.themes[0].description).toBe("meta");
    });
});

const defaultCourse: StoredDefaultCourse = {
    courseID: 1,
    title: { es: "Peones", en: "Pawns" },
    level: "Principiante",
    imageUrl: { general: "g.webp", full: "f.webp", thumb: "t.webp" },
    content: {
        detailDescription: { es: "detalle", en: "detail" },
        themes: [
            {
                id: 1,
                images: ["i.webp"],
                title: { es: "Posición inicial", en: "Starting position" },
                description: { es: "desc", en: "desc-en" },
            },
        ],
    },
};

describe("resolveDefaultCourse", () => {
    it("resuelve título, detailDescription (escalar) y temas", () => {
        const dc = resolveDefaultCourse(defaultCourse, "en");
        expect(dc.title).toBe("Pawns");
        expect(dc.content.detailDescription).toBe("detail");
        expect(dc.content.themes[0].title).toBe("Starting position");
        expect(dc.content.themes[0].description).toBe("desc-en");
        expect(dc.content.themes[0].images).toEqual(["i.webp"]);
        expect(dc.level).toBe("Principiante");
    });
});

describe("resolveOpinion", () => {
    it("resuelve el texto y conserva id/idUser", () => {
        const op: StoredOpinion = {
            id: 3,
            idUser: 7,
            text: { es: "buena", en: "good" },
        };
        expect(resolveOpinion(op, "en")).toEqual({
            id: 3,
            idUser: 7,
            text: "good",
        });
        expect(resolveOpinion(op, "es").text).toBe("buena");
    });
});

// Datos corruptos (ADR-018): localStorage es editable y puede no cumplir los
// tipos Stored*. Los resolvedores no deben lanzar: dejan `undefined` en el
// hueco para que la vista muestre su aviso, y resuelven el resto.

/** Simula un dato de localStorage que no cumple su tipo. */
const corrupt = <T>(value: unknown): T => value as T;

describe("pick / pickList con datos corruptos", () => {
    it("no lanza y devuelve undefined si el campo no es un objeto", () => {
        expect(pick(corrupt(null), "en")).toBeUndefined();
        expect(pick(corrupt(undefined), "es")).toBeUndefined();
        expect(pick(corrupt("hola"), "es")).toBeUndefined();
        expect(pickList(corrupt(null), "en")).toBeUndefined();
    });

    it("usa la variante de otro idioma si falta la pedida", () => {
        expect(pick(corrupt({ es: "hola", en: null }), "en")).toBe("hola");
        expect(pick(corrupt({ es: 42, en: "hi" }), "es")).toBe("hi");
        expect(pickList(corrupt({ es: ["a"], en: null }), "en")).toEqual([
            "a",
        ]);
    });

    it("devuelve undefined si ninguna variante es válida", () => {
        expect(pick(corrupt({ es: null, en: null }), "es")).toBeUndefined();
        expect(pickList(corrupt({ es: "a", en: {} }), "en")).toBeUndefined();
    });

    it("conserva la cadena vacía (es un string válido)", () => {
        expect(pick({ es: "", en: "hi" }, "es")).toBe("");
    });
});

describe("resolvedores con datos corruptos", () => {
    it("caso del README: description a null en un tema de curso por defecto", () => {
        const broken = corrupt<StoredDefaultCourse>({
            ...defaultCourse,
            content: {
                ...defaultCourse.content,
                themes: [{ ...defaultCourse.content.themes[0], description: null }],
            },
        });

        const dc = resolveDefaultCourse(broken, "en");
        expect(dc.title).toBe("Pawns");
        expect(dc.content.themes[0].title).toBe("Starting position");
        expect(dc.content.themes[0].description).toBeUndefined();
    });

    it("una lista que no es array queda como hueco sin tumbar el curso", () => {
        const broken = corrupt<StoredCourse>({
            ...course,
            content: { ...course.content, themes: null },
            toLearn: null,
        });

        const c = resolveCourse(broken, "en");
        expect(c.title).toBe("Pawns");
        expect(c.content.themes).toBeUndefined();
        expect(c.content.detailDescription).toEqual(["q1"]);
        expect(c.toLearn).toBeUndefined();
    });

    it("un elemento roto de una lista queda como hueco y el resto se resuelve", () => {
        const broken = corrupt<StoredCourse>({
            ...course,
            content: {
                ...course.content,
                themes: [null, course.content.themes[0]],
            },
        });

        const themes = resolveCourse(broken, "es").content.themes;
        expect(themes).toHaveLength(2);
        expect(themes[0]).toBeUndefined();
        expect(themes[1].title).toBe("Tema");
    });

    it("una entidad entera que no es objeto devuelve undefined", () => {
        expect(resolveCourse(corrupt(null), "es")).toBeUndefined();
        expect(resolveDefaultCourse(corrupt(null), "es")).toBeUndefined();
        expect(resolveAuthor(corrupt(null), "es")).toBeUndefined();
        expect(resolveOpinion(corrupt(null), "es")).toBeUndefined();
    });

    it("no localizables a null se conservan tal cual (los valida la vista)", () => {
        const broken = corrupt<StoredOpinion>({ id: null, idUser: 7, text: null });
        expect(resolveOpinion(broken, "en")).toEqual({
            id: null,
            idUser: 7,
            text: undefined,
        });
    });
});
