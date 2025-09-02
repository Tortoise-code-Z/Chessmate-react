import { CHESS_LEVEL, FILTERS, LEVELS } from "../consts/general";

// GENERAL TYPES
//
//

export type CourseDataItem = {
    id: number;
    title: string;
    description: string;
    url: string;
};

// AUTHORS
//
//

export type AuthorCurseData = {
    id: number;
    name: string;
    description: string;
    level?: ChessLevel;
    elo?: number;
    image: string;
};

//
//

// USER
//
//

export type ObtainedCourse = {
    courseId: number;
    progress: number;
};

export type ObtainedDefaultCourse = {
    courseId: number;
    progress: number;
    themes: ThemesUserStates[];
};

export type ThemesUserStates = {
    themeID: number;
    completed: boolean;
};

export type BaseUser = {
    userID: number;
    username: string;
    email: string;
    elo: number | null;
    title: ChessLevel | null;
    isFirstLogin: boolean;
};

export type User = BaseUser & {
    password: string;
    defaultCourses: ObtainedDefaultCourse[];
    courses: ObtainedCourse[];
};

export type UserAuth = {
    userID: number;
    username: string;
    firstLogin: boolean;
};

export type StorageUser = BaseUser;

//
//

// ALL COURSES
//
//

export type Progress = {
    progress?: number;
};

export type ChessLevel = (typeof CHESS_LEVEL)[number];

export type CourseImageUrls = {
    general: string;
    full: string;
    thumb: string;
};

export type Level = (typeof LEVELS)[number];
export type FilterOptions = (typeof FILTERS)[number];

// DefaultCourses
//

export type ThemeDefaultCourses = {
    id: number;
    images: string[];
    title: string;
    description: string;
};

export type ContentDefaultCourseData = {
    themes: ThemeDefaultCourses[];
    detailDescription: string;
};

export type BaseCourse = {
    curseID: number;
    title: string;
    level: Level;
    imageUrl: CourseImageUrls;
};

export type DefualtCourse = BaseCourse & {
    content: ContentDefaultCourseData;
};

export type DefaultValuesDefaultCourses = Omit<
    DefualtCourse,
    "imageUrl" | "content" | "curseID" | "level"
> &
    Omit<Progress, "progress"> & { progress: string } & {
        content: Omit<ContentDefaultCourseData, "themes"> & {
            themes: Omit<ThemeDefaultCourses, "id" | "images">;
        };
        level: string;
    };

//

// Courses
//

export type Course = BaseCourse & {
    createdAt: string;
    sales: number;
    shortDescription: string;
    detailDescription: string;
    price: number;
    content: ContentCurseData;
    toLearn?: ToLearnCurseData;
    authors: AuthorCurseData[];
};

export type DefaultCourseValues = Omit<
    Course,
    | "authors"
    | "imageUrl"
    | "level"
    | "toLearn"
    | "content"
    | "curseID"
    | "price"
    | "createdAt"
> &
    Omit<Progress, "progress"> & { progress: string } & {
        createdAt: string | undefined;
        level: string;
        toLearn: Omit<ToLearnCurseData, "themes" | "detailDescription"> & {
            themes: Omit<ToLearnTheme, "id">;
            detailDescription: string;
        };
        content: Omit<ContentCurseData, "themes" | "detailDescription"> & {
            themes: Omit<Theme, "id" | "content"> & {
                content: Omit<ThemeContent, "id" | "cover" | "video">;
            };
            detailDescription: string;
        };
        price: string;
    };

export type ThemeContent = {
    id: number;
    title: string;
    cover: string;
    video: string;
};

export type Theme = {
    id: number;
    title: string;
    description: string;
    content: ThemeContent[];
};

export type ToLearnTheme = {
    id: number;
    title: string;
    description: string;
};

export type ContentCurseData = {
    themes: Theme[];
    detailDescription: string[];
};

export type ToLearnCurseData = {
    themes: ToLearnTheme[];
    detailDescription: string[];
};

export type CourseJSON = Omit<Course, "authors"> & {
    authors: number[];
};

//
//

export type IsObtainedCourse = { isObtained?: boolean };

export type ButtonVariant =
    | "Primary"
    | "Secondary"
    | "Terciary"
    | "Complementary"
    | "Red"
    | "Card";

export type InputType = "text" | "password" | "checkbox";

// API PLAYERS
//
//

export type BestPlayerChessData = {
    player_id: number;
    "@id": string;
    url: string;
    username: string;
    score: number;
    rank: number;
    country: string;
    title: string | ChessLevel;
    name: string;
    status: string;
    avatar: string;
    trend_score: {
        direction: number;
        delta: number;
    };
    trend_rank: {
        direction: number;
        delta: number;
    };
    flair_code: string;
    win_count: number;
    loss_count: number;
    draw_count: number;
};

export type BestChessPlayers = {
    live_blitz: BestPlayerChessData[];
};

//
//

// OPINIONS
//
//

export type Opinion = {
    id: number;
    user: UserOpinionData;
    text: string;
};

export type JsonOpinion = {
    id: number;
    idUser: number;
    text: string;
};

export type UserOpinionData = {
    userID: number;
    username: string;
    elo: number | null;
    title: ChessLevel | null;
};

// COMMENTS
//
//

export type JsonComments = {
    id: number;
    idUser: number;
    idCourse: number;
    text: string;
    createdAt: string;
};

export type CommentsJSON = {
    id: number;
    idUser: number;
    idCourse: number;
    text: string;
    createdAt: string;
};

export type Comments = {
    id: number;
    user: User;
    idCourse: number;
    text: string;
    createdAt: string;
};

export type DefaultCommentsValue = Omit<
    Comments,
    "user" | "id" | "idCourse"
> & {
    user: Omit<
        User,
        | "userID"
        | "isFirstLogin"
        | "elo"
        | "title"
        | "password"
        | "defaultCourses"
        | "courses"
        | "email"
    > & {
        elo: string;
        title: string;
    };
};

//
//
//

// DATA BASE
//
//

export type BBDD = {
    users: User[];
    defaultCourses: DefualtCourse[];
    courses: CourseJSON[];
    comments: JsonComments[];
    opinions: JsonOpinion[];
    authors: AuthorCurseData[];
};

//
//

export type ErrorCode =
    | "INVALID_USER"
    | "INVALID_PASSWORD"
    | "DB_ERROR"
    | "UNEXPECTED_ERROR"
    | "EMAIL_ALREADY_USED"
    | "USERNAME_TAKEN";

export type CustomError = {
    code: ErrorCode;
    message: string;
    status?: number;
    field?: string;
};

export type UseCourseApiType = {
    courses: DefualtCourse;
    userThemeStates: ThemesUserStates[];
};

export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

export type ProfessorValues =
    | "cantBuySesion"
    | "cantCommentSesion"
    | "cantCommentHasntBuyCourse"
    | "firstLogin";

export type Images = {
    image: string | undefined;
    width: number | undefined;
    height: number | undefined;
    alt: string | undefined;
};
