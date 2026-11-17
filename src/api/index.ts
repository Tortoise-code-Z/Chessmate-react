import {
    AuthorCurseData,
    BBDD,
    CourseJSON,
    DefualtCourse,
    FilterOptions,
    IsObtainedCourse,
    JsonComments,
    JsonOpinion,
    ObtainedCourse,
    ObtainedDefaultCourse,
    Progress,
    StoredCourse,
    ThemesUserStates,
    ThemesUserStatesOC,
    User,
} from "../types/types";
import { Language } from "../consts/i18n";
import {
    resolveAuthor,
    resolveCourse,
    resolveDefaultCourse,
    resolveOpinion,
} from "./localize";
import { isArray, isObject, isString } from "../utils/general";

// Users
export const getUsers: (data: BBDD) => User[] = (data) => {
    return data.users;
};

export const getEmail: (data: BBDD, email: string) => boolean = (
    data,
    email
) => {
    return data.users.some((u) => u.email === email);
};

export const getDefaultCoursesWithProgress: (
    data: BBDD,
    user: User,
    lang: Language
) => (DefualtCourse & Progress)[] | undefined = (data, user, lang) => {
    return data?.defaultCourses?.map((df) =>
        df
            ? {
                  ...resolveDefaultCourse(df, lang),
                  progress:
                      user?.defaultCourses?.find(
                          (udf) => udf.courseId === df.courseID
                      )?.progress || 0,
              }
            : ({} as DefualtCourse & Progress)
    );
};

export const checkPassword: (
    password1: string,
    password2: string
) => boolean = (password1, password2) => {
    return password1 === password2;
};

export const getUserById: (
    id: number | undefined,
    data: BBDD
) => User | undefined = (id, data) => {
    return data.users.find((u) => u.userID === id);
};

export const getUserByUsername: (
    username: string,
    data: BBDD
) => User | undefined = (username, data) => {
    return data.users.find((u) => u.username === username);
};

export const getUserObtainedCourses: (
    userID: number | undefined,
    data: BBDD
) => ObtainedCourse[] | undefined = (userID, data) => {
    return data.users?.find((u) => u.userID === userID)?.courses;
};

export const getUserDefaultCourses: (
    userID: number | undefined,
    data: BBDD
) => ObtainedDefaultCourse[] | undefined = (userID, data) => {
    return data.users?.find((u) => u.userID === userID)?.defaultCourses;
};

export const getUserDefaultCourse: (
    userID: number | undefined,
    courseID: number | undefined,
    data: BBDD
) => ObtainedDefaultCourse | undefined = (userID, courseID, data) => {
    return data.users
        ?.find((u) => u.userID === userID)
        ?.defaultCourses.find((df) => df.courseId === courseID);
};

export const getUserObtainedCourse: (
    userID: number | undefined,
    courseID: number,
    data: BBDD
) => ObtainedCourse | undefined = (userID, courseID, data) => {
    return data.users
        ?.find((u) => u.userID === userID)
        ?.courses.find((course) => course.courseId === courseID);
};

// ObtainedCourses

/**
 * Cursos almacenados que al menos son objetos (ADR-021).
 *
 * localStorage es editable: `data.courses` puede no ser una lista o traer
 * entradas que no son objetos (`null`, un numero...). Esas entradas no tienen
 * nada que pintar y tumbarian a quien lea sus campos, asi que se descartan.
 * Un curso que SI es objeto pero tiene campos rotos se conserva: lo avisa la
 * vista (`SecurityRendering`), como pide ADR-018 y la demo del README.
 */
const getStoredCourses: (data: BBDD) => StoredCourse[] = (data) =>
    isArray<StoredCourse>(data.courses)
        ? data.courses.filter((course) => isObject(course))
        : [];

export const getCourses: (data: BBDD, lang: Language) => CourseJSON[] = (
    data,
    lang
) => {
    return getStoredCourses(data).map((course) => resolveCourse(course, lang));
};

// DefaultCourses
export const getDefaultCourses: (data: BBDD, lang: Language) => DefualtCourse[] =
    (data, lang) => {
        return (data.defaultCourses || []).map((course) =>
            resolveDefaultCourse(course, lang)
        );
    };

export const getUserDefaultCourseThemes: (
    data: BBDD,
    userID: number | undefined,
    courseID: number | undefined
) => ThemesUserStates[] | undefined = (data, userID, courseID) => {
    return data.users
        .find((u) => u.userID === userID)
        ?.defaultCourses?.find((dc) => dc?.courseId === courseID)?.themes;
};

export const getUserCourseThemes: (
    data: BBDD,
    userID: number | undefined,
    courseID: number
) => ThemesUserStatesOC[] = (data, userID, courseID) => {
    return (
        data.users
            .find((u) => u.userID === userID)
            ?.courses?.find((dc) => dc?.courseId === courseID)?.themes ||
        ([] as ThemesUserStatesOC[])
    );
};

export const getDefaultCourse: (
    data: BBDD,
    courseID: number | undefined,
    lang: Language
) => DefualtCourse | undefined = (data, courseID, lang) => {
    const course = data.defaultCourses.find((dc) => dc?.courseID === courseID);
    return course ? resolveDefaultCourse(course, lang) : undefined;
};

// Authors
export const getAuthors: (data: BBDD, lang: Language) => AuthorCurseData[] = (
    data,
    lang
) => {
    return (data.authors || []).map((author) => resolveAuthor(author, lang));
};

// Comments
export const getComments: (data: BBDD) => JsonComments[] = (data) => {
    return data.comments || ([] as JsonComments[]);
};

// Opinions

export const getOpinions: (data: BBDD, lang: Language) => JsonOpinion[] = (
    data,
    lang
) => {
    return (data.opinions || []).map((opinion) => resolveOpinion(opinion, lang));
};

// General

export const getFilteredCourses = (
    filter: FilterOptions | undefined,
    data: BBDD,
    lang: Language
): (CourseJSON & IsObtainedCourse)[] => {
    const storedCourses = getStoredCourses(data);
    const coursesToMap =
        filter === "Todos"
            ? storedCourses
            : storedCourses.filter((c) => c.level === filter);

    return coursesToMap.map((course) => resolveCourse(course, lang));
};

/**
 * Indica si algun campo de texto del curso contiene `searchLower`.
 * Un campo que no es string (dato corrupto) simplemente no coincide.
 */
const matchesSearch: (course: CourseJSON, searchLower: string) => boolean = (
    course,
    searchLower
) =>
    [course.title, course.shortDescription, course.level].some(
        (field: unknown) =>
            isString(field) && field.toLowerCase().includes(searchLower)
    );

export const getSearchedCourses = (
    search: string,
    data: BBDD,
    lang: Language
): (CourseJSON & IsObtainedCourse)[] => {
    const searchLower = search.toLowerCase();

    return getCourses(data, lang).filter((course) =>
        matchesSearch(course, searchLower)
    );
};

export const getCourseById: (
    data: BBDD,
    courseID: number,
    lang: Language
) => CourseJSON | undefined = (data, courseID, lang) => {
    const course = getStoredCourses(data).find((c) => c.courseID === courseID);
    return course ? resolveCourse(course, lang) : undefined;
};

export const getDataLocalStorage: <T>(key: string) => T | null = (key) => {
    const getData = localStorage.getItem(key);
    if (getData) return JSON.parse(getData);
    return null;
};

export const setItemLocalStorage: <T>(key: string, data: T) => void = (
    key,
    data
) => {
    localStorage.setItem(key, JSON.stringify(data));
};

export const removeItemLocalStorage: (key: string) => void = (key) => {
    localStorage.removeItem(key);
};

export const getTodayDate: () => string = () => {
    return new Date()
        .toISOString()
        .split("T")[0]
        .split("-")
        .reverse()
        .join("-");
};

export const orderedMayorToMenorByKey = <T>(
    data: T[],
    key: {
        [K in keyof T]: T[K] extends number ? K : never;
    }[keyof T]
): T[] => {
    return [...data].sort((a, b) => (b[key] as number) - (a[key] as number));
};

export const getRandom = <T>(data: T[]): T => {
    const randomIndex: number = Math.floor(Math.random() * data.length);
    return data[randomIndex];
};

export const deleteKey: <T extends Record<string, unknown>, K extends keyof T>(
    data: T,
    key: K
) => Omit<T, K> = (data, key) => {
    const { [key]: _, ...rest } = data;
    return rest;
};
