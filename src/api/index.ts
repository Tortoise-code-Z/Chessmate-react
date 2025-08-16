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
    ThemesUserStates,
    User,
} from "../types/types";

// Users
export const getUsers: (data: BBDD) => User[] = (data) => {
    return data.users;
};

export const getUserById: (id: number, data: BBDD) => User = (id, data) => {
    return data.users.find((u) => u.userID === id) || ({} as User);
};

export const getUserByUsername: (username: string, data: BBDD) => User = (
    username,
    data
) => {
    return data.users.find((u) => u.username === username) || ({} as User);
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

// export const getUserDefaultCourses: (
//     userID: number | undefined,
//     data: BBDD
// ) => DefualtCourse[] = (userID, data) => {
//     return (
//         data.users?.find((u) => u.userID === userID)?.defaultCourses ||
//         ([] as DefualtCourse[])
//     );
// };

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
            ?.defaultCourses.find((dc) => dc.courseId === courseID)?.themes ||
        ([] as ThemesUserStates[])
    );
};

export const getDefaultCourse: (
    data: BBDD,
    courseID: number
) => DefualtCourse = (data, courseID) => {
    return (
        data.defaultCourses.find((dc) => dc.curseID === courseID) ||
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

export const getSearchedCourses: (
    search: string,
    userCourses: ObtainedCourse[],
    data: BBDD
) => (CourseJSON & IsObtainedCourse)[] = (search, userCourses, data) => {
    const searchedCourses: CourseJSON[] = data.courses.filter(
        (c) =>
            c.title.toLowerCase().includes(search.toLowerCase()) ||
            c.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
            c.level.toLowerCase().includes(search.toLowerCase())
    );

    const courses: (CourseJSON & IsObtainedCourse)[] = searchedCourses.map(
        (sc) => ({
            ...sc,
            isObtained: userCourses.some((uc) => uc.courseId === sc.curseID),
        })
    );

    return courses;
};

export const getFilteredCourses: (
    filter: FilterOptions | undefined,
    userCourses: ObtainedCourse[],
    data: BBDD
) => (CourseJSON & IsObtainedCourse)[] = (filter, userCourses, data) => {
    let courses;
    if (filter === "Todos") {
        courses = data.courses.map((c) => ({
            ...c,
            isObtained: userCourses.some((uc) => uc.courseId === c.curseID),
        }));
        return courses || ([] as (CourseJSON & IsObtainedCourse)[]);
    }
    const filteredCourses = data.courses
        .filter((c) => c.level === filter)
        .map((fc) => ({
            ...fc,
            isObtained: userCourses.some((uc) => uc.courseId === fc.curseID),
        }));

    return filteredCourses || ([] as (CourseJSON & IsObtainedCourse)[]);
};

export const getAllCourses: (
    userCourses: ObtainedCourse[],
    data: BBDD
) => (CourseJSON & IsObtainedCourse)[] = (userCourses, data) => {
    const courses = data.courses.map((c) => ({
        ...c,
        isObtained: userCourses.some((uc) => uc.courseId === c.curseID),
    }));

    return courses || ([] as (CourseJSON & IsObtainedCourse)[]);
};

export const getCourseById: (data: BBDD, courseID: number) => CourseJSON = (
    data,
    courseID
) => {
    return (
        data.courses.find((c) => c.curseID === courseID) || ({} as CourseJSON)
    );
};
