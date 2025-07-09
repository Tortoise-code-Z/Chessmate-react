export type BaseUser = {
    userID: number;
    username: string;
    email: string;
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
    detailDescription?: string;
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
    description: string;
    level?: ChessLevel;
    elo?: number;
};

export type CourseData = {
    detailDescription: string;
    content: ContentCurseData;
    toLearn?: ToLearnCurseData;
    authors: AuthorCurseData[];
};

export type BaseCourse = {
    curseID: number;
    title: string;
    level: Level;
    thumbImg: string;
    content: ContentCurseData;
};

export type DefualtCourse = BaseCourse;

export type Course = BaseCourse & {
    price: number;
    shortDescription: string;
    detailDescription: string;
    authors: AuthorCurseData[];
    toLearn?: ToLearnCurseData;
};

export type ObtainedCourse = {
    courseID: number;
    progress: number;
    completed: boolean;
};

export type StorageUser = BaseUser;

export type User = BaseUser & {
    password: string;
    defaultCurses: ObtainedCourse[];
    courses: ObtainedCourse[];
};
