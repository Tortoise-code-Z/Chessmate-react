import { describe, it, expect } from "vitest";
import {
    getCourseById,
    getCourses,
    getFilteredCourses,
    getSearchedCourses,
} from "./index";
import type { BBDD, StoredCourse } from "../types/types";

/** Fuerza un dato que no cumple su tipo, como el de un localStorage editado. */
const corrupt = <T>(value: unknown): T => value as T;

const makeCourse = (overrides: Partial<StoredCourse> = {}): StoredCourse => ({
    courseID: 1,
    title: { es: "Peones", en: "Pawns" },
    level: "Principiante",
    imageUrl: { general: "g.webp", full: "f.webp", thumb: "t.webp" },
    createdAt: "2024-01-01",
    sales: 10,
    shortDescription: { es: "estructuras", en: "structures" },
    detailDescription: { es: "detalle", en: "detail" },
    price: 9.99,
    content: {
        themes: [],
        detailDescription: { es: ["p1"], en: ["q1"] },
    },
    toLearn: {
        themes: [],
        detailDescription: { es: ["l-es"], en: ["l-en"] },
    },
    authors: [1],
    ...overrides,
});

const pawns = makeCourse();
const openings = makeCourse({
    courseID: 2,
    title: { es: "Aperturas", en: "Openings" },
    level: "Intermedio",
    shortDescription: { es: "repertorio", en: "repertoire" },
});

const makeData = (courses: unknown): BBDD => ({
    users: [],
    defaultCourses: [],
    courses: corrupt<StoredCourse[]>(courses),
    comments: [],
    opinions: [],
    authors: [],
});

const ids = (courses: { courseID: number }[]): number[] =>
    courses.map((course) => course.courseID);

describe("getSearchedCourses", () => {
    it("busca por título, descripción corta y nivel en el idioma activo", () => {
        const data = makeData([pawns, openings]);
        expect(ids(getSearchedCourses("openings", data, "en"))).toEqual([2]);
        expect(ids(getSearchedCourses("ESTRUCTURAS", data, "es"))).toEqual([1]);
        expect(ids(getSearchedCourses("intermedio", data, "es"))).toEqual([2]);
    });

    it("devuelve lista vacía si nada coincide", () => {
        const data = makeData([pawns, openings]);
        expect(getSearchedCourses("torres", data, "es")).toEqual([]);
    });

    it("descarta las entradas que no son objeto sin tumbar la búsqueda", () => {
        const data = makeData([null, pawns, 42, "x", openings]);
        expect(ids(getSearchedCourses("s", data, "en"))).toEqual([1, 2]);
    });

    it("un curso sin título válido en ningún idioma no lanza y se busca por el resto", () => {
        const noTitle = makeCourse({
            courseID: 3,
            title: corrupt({ es: null, en: 7 }),
        });
        const data = makeData([noTitle, openings]);

        expect(() => getSearchedCourses("aperturas", data, "es")).not.toThrow();
        expect(ids(getSearchedCourses("estructuras", data, "es"))).toEqual([3]);
    });

    it("campos de texto o nivel corruptos simplemente no coinciden", () => {
        const broken = makeCourse({
            courseID: 4,
            title: corrupt(null),
            shortDescription: corrupt("no es LocalizedText"),
            level: corrupt(99),
        });
        const data = makeData([broken, pawns]);

        expect(ids(getSearchedCourses("peones", data, "es"))).toEqual([1]);
        expect(getSearchedCourses("99", data, "es")).toEqual([]);
    });

    it("conserva los cursos con campos rotos que sí coinciden (los avisa la vista)", () => {
        // Caso de la demo del README: courseID a null.
        const noId = makeCourse({ courseID: corrupt(null) });
        const [found] = getSearchedCourses("peones", makeData([noId]), "es");
        expect(found.courseID).toBeNull();
    });

    it("no lanza si la lista de cursos no es un array", () => {
        expect(getSearchedCourses("a", makeData(null), "es")).toEqual([]);
        expect(getSearchedCourses("a", makeData({ 0: pawns }), "es")).toEqual([]);
    });
});

describe("getFilteredCourses", () => {
    it("filtra por nivel y 'Todos' devuelve todos", () => {
        const data = makeData([pawns, openings]);
        expect(ids(getFilteredCourses("Intermedio", data, "es"))).toEqual([2]);
        expect(ids(getFilteredCourses("Todos", data, "es"))).toEqual([1, 2]);
    });

    it("descarta las entradas que no son objeto sin lanzar", () => {
        const data = makeData([null, pawns, undefined, openings]);
        expect(ids(getFilteredCourses("Principiante", data, "es"))).toEqual([1]);
        expect(ids(getFilteredCourses("Todos", data, "es"))).toEqual([1, 2]);
    });
});

describe("getCourses", () => {
    it("no deja huecos undefined en la lista", () => {
        const courses = getCourses(makeData([pawns, null, openings]), "en");
        expect(courses).toHaveLength(2);
        expect(courses.every((course) => course !== undefined)).toBe(true);
    });

    it("devuelve lista vacía si la lista de cursos no es un array", () => {
        expect(getCourses(makeData(undefined), "es")).toEqual([]);
    });
});

describe("getCourseById", () => {
    it("resuelve el curso pedido en el idioma activo", () => {
        const data = makeData([pawns, openings]);
        expect(getCourseById(data, 2, "en")?.title).toBe("Openings");
    });

    it("salta las entradas que no son objeto sin lanzar", () => {
        const data = makeData([null, 42, openings]);
        expect(getCourseById(data, 2, "es")?.title).toBe("Aperturas");
    });

    it("devuelve undefined si no existe o la lista no es un array", () => {
        expect(getCourseById(makeData([pawns]), 99, "es")).toBeUndefined();
        expect(getCourseById(makeData(null), 1, "es")).toBeUndefined();
    });
});
