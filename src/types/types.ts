export type User = {
    userID: number;
    username: string;
    email: string;
    password: string;
};

export type Level =
    | "beginner"
    | "intermediate"
    | "advanced"
    | "expert"
    | "master";

export type Theme = {
    title: string;
    description: string;
};

export type ToLearnTheme = {
    title: string;
    description: string;
};

export type ContentCurseData = {
    themes: Theme[];
    detailDescription: string;
};

export type ToLearnCurseData = {
    themes: ToLearnTheme[];
    detailDescription: string;
};

export type ChessLevel =
    | "CM"
    | "FM"
    | "IM"
    | "GM"
    | "WCM"
    | "WFM"
    | "WIM"
    | "WGM";

export type AuthorCurseData = {
    name: string;
    description?: string;
    level?: ChessLevel;
    elo?: number;
};

export type CourseData = {
    detailDescription: string;
    content: ContentCurseData;
    toLearn?: ToLearnCurseData;
    authors: AuthorCurseData[];
};

export type Course = {
    curseID: number;
    title: string;
    shortDescription: string;
    level: Level;
    price: number;
    data: CourseData;
    thumbImg: string;
};

export type ObtainedCourses = {
    progress: number;
    completed: boolean;
    course: Course;
};

export type UserAuth = {
    user: User;
    courses: ObtainedCourses[];
};
