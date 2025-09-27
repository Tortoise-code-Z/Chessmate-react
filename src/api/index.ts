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
) => (DefualtCourse & Progress)[] | undefined = (data, user) => {
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
export const getCourses: (data: BBDD) => CourseJSON[] = (data) => {
    return data.courses || ([] as CourseJSON[]);
};

// DefaultCourses
export const getDefaultCourses: (data: BBDD) => DefualtCourse[] = (data) => {
    return data.defaultCourses || ([] as DefualtCourse[]);
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
    courseID: number | undefined
) => DefualtCourse | undefined = (data, courseID) => {
    return data.defaultCourses.find((dc) => dc?.curseID === courseID);
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

export const getFilteredCourses = (
    filter: FilterOptions | undefined,
    data: BBDD
): (CourseJSON & IsObtainedCourse)[] => {
    const coursesToMap =
        filter === "Todos"
            ? data.courses
            : data.courses.filter((c) => c.level === filter);

    return coursesToMap || ([] as (CourseJSON & IsObtainedCourse)[]);
};

export const getSearchedCourses = (
    search: string,
    data: BBDD
): (CourseJSON & IsObtainedCourse)[] => {
    const searchLower = search.toLowerCase();
    const searchedCourses = data.courses.filter(
        (c) =>
            c.title.toLowerCase().includes(searchLower) ||
            c.shortDescription.toLowerCase().includes(searchLower) ||
            c.level.toLowerCase().includes(searchLower)
    );

    return searchedCourses || ([] as (CourseJSON & IsObtainedCourse)[]);
};

export const getCourseById: (
    data: BBDD,
    courseID: number
) => CourseJSON | undefined = (data, courseID) => {
    return data.courses.find((c) => c.curseID === courseID);
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

export const deleteKey: <T extends Record<string, any>, K extends keyof T>(
    data: T,
    key: K
) => Omit<T, K> = (data, key) => {
    const { [key]: _, ...rest } = data;
    return rest;
};
