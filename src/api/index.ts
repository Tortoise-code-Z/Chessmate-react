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
    ThemesUserStates,
    ThemesUserStatesOC,
    User,
} from "../types/types";

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
    user: User
) => (DefualtCourse & Progress)[] = (data, user) => {
    return data?.defaultCourses?.map((df) =>
        df
            ? {
                  ...df,
                  progress:
                      user?.defaultCourses?.find(
                          (udf) => udf.courseId === df.curseID
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

export const getUserById: (id: number, data: BBDD) => User | undefined = (
    id,
    data
) => {
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
) => ObtainedCourse[] = (userID, data) => {
    return (
        data.users?.find((u) => u.userID === userID)?.courses ||
        ([] as ObtainedCourse[])
    );
};

export const getUserDefaultCourses: (
    userID: number | undefined,
    data: BBDD
) => ObtainedDefaultCourse[] = (userID, data) => {
    return (
        data.users?.find((u) => u.userID === userID)?.defaultCourses ||
        ([] as ObtainedDefaultCourse[])
    );
};

export const getUserDefaultCourse: (
    userID: number | undefined,
    courseID: number,
    data: BBDD
) => ObtainedDefaultCourse = (userID, courseID, data) => {
    return (
        data.users
            ?.find((u) => u.userID === userID)
            ?.defaultCourses.find((df) => df.courseId === courseID) ||
        ({} as ObtainedDefaultCourse)
    );
};

export const getUserObtainedCourse: (
    userID: number | undefined,
    courseID: number,
    data: BBDD
) => ObtainedCourse | null = (userID, courseID, data) => {
    return (
        data.users
            ?.find((u) => u.userID === userID)
            ?.courses.find((course) => course.courseId === courseID) || null
    );
};

// ObtainedCourses
export const getCourses: (data: BBDD) => CourseJSON[] = (data) => {
    return data.courses || ([] as CourseJSON[]);
};

// DefaultCourses
export const getDefaultCourses: (data: BBDD) => DefualtCourse[] = (data) => {
    return data.defaultCourses || ([] as DefualtCourse[]);
};

export const getUserDefaultCourseThemes: (
    data: BBDD,
    userID: number,
    courseID: number
) => ThemesUserStates[] = (data, userID, courseID) => {
    return (
        data.users
            .find((u) => u.userID === userID)
            ?.defaultCourses?.find((dc) => dc?.courseId === courseID)?.themes ||
        ([] as ThemesUserStates[])
    );
};

export const getUserCourseThemes: (
    data: BBDD,
    userID: number,
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
    courseID: number
) => DefualtCourse = (data, courseID) => {
    return (
        data.defaultCourses.find((dc) => dc?.curseID === courseID) ||
        ({} as DefualtCourse)
    );
};

// Authors
export const getAuthors: (data: BBDD) => AuthorCurseData[] = (data) => {
    return data.authors || ([] as AuthorCurseData[]);
};

// Comments
export const getComments: (data: BBDD) => JsonComments[] = (data) => {
    return data.comments || ([] as JsonComments[]);
};

// Opinions

export const getOpinions: (data: BBDD) => JsonOpinion[] = (data) => {
    return data.opinions || ([] as JsonOpinion[]);
};

// General

const addIsObtained = (
    courses: CourseJSON[],
    userCourses: ObtainedCourse[]
): (CourseJSON & IsObtainedCourse)[] =>
    courses.map((c) => ({
        ...c,
        isObtained: userCourses.some((uc) => uc.courseId === c.curseID),
    }));

export const getAllCourses = (
    userCourses: ObtainedCourse[],
    data: BBDD
): (CourseJSON & IsObtainedCourse)[] =>
    addIsObtained(data.courses, userCourses);

export const getFilteredCourses = (
    filter: FilterOptions | undefined,
    userCourses: ObtainedCourse[],
    data: BBDD
): (CourseJSON & IsObtainedCourse)[] => {
    const coursesToMap =
        filter === "Todos"
            ? data.courses
            : data.courses.filter((c) => c.level === filter);
    return addIsObtained(coursesToMap, userCourses);
};

export const getSearchedCourses = (
    search: string,
    userCourses: ObtainedCourse[],
    data: BBDD
): (CourseJSON & IsObtainedCourse)[] => {
    const searchLower = search.toLowerCase();
    const searchedCourses = data.courses.filter(
        (c) =>
            c.title.toLowerCase().includes(searchLower) ||
            c.shortDescription.toLowerCase().includes(searchLower) ||
            c.level.toLowerCase().includes(searchLower)
    );
    return addIsObtained(searchedCourses, userCourses);
};

export const getCourseById: (data: BBDD, courseID: number) => CourseJSON = (
    data,
    courseID
) => {
    return (
        data.courses.find((c) => c.curseID === courseID) || ({} as CourseJSON)
    );
};

export const getDataLocalStorage: (key: string) => BBDD | null = (key) => {
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

export const orderedMenorToMayorByNumber = (data: number[]) =>
    [...data].sort((a, b) => a - b);

export const orderedMenorToMayorByKey = <T>(
    data: T[],
    key: {
        [K in keyof T]: T[K] extends number ? K : never;
    }[keyof T]
): T[] => {
    return [...data].sort((a, b) => (a[key] as number) - (b[key] as number));
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

export const getLastId = <
    T extends number | Record<string, any>,
    K extends T extends number
        ? never
        : {
              [P in keyof T]: T[P] extends number ? P : never;
          }[keyof T] = never
>(
    data: T[],
    key?: K
): number => {
    if (data.length === 0) return 1;

    if (key && typeof data[0] === "object") {
        return (data[data.length - 1] as Record<string, any>)[key] + 1;
    }

    return (data[data.length - 1] as number) + 1;
};

export const deleteKey: <T extends Record<string, any>, K extends keyof T>(
    data: T,
    key: K
) => Omit<T, K> = (data, key) => {
    const { [key]: _, ...rest } = data;
    return rest;
};
