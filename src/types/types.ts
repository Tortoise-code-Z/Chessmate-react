export type BaseUser = {
    userID: number;
    username: string;
    email: string;
    elo: number | null;
    title: ChessLevel | null;
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

export type ToLearnCurseData = {
    themes: ToLearnTheme[];
    detailDescription: string[];
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

export type ContentCurseData = {
    themes: Theme[];
    detailDescription?: string[];
};

export type BaseCourse = {
    curseID: number;
    title: string;
    level: Level;
    content: ContentCurseData;
    imageUrl: CourseImageUrls;
};

export type CourseImageUrls = {
    general: string;
    full?: string;
    thumb?: string;
};

export type DefualtCourse = BaseCourse;

export type Course = BaseCourse & {
    price: number;
    shortDescription: string;
    detailDescription: string;
    authors: AuthorCurseData[];
    toLearn?: ToLearnCurseData;
    sales: number;
};

export type ObtainedCourse = {
    courseID: number;
    progress: number;
};

export type User = BaseUser & {
    password: string;
    defaultCurses: ObtainedCourse[];
    courses: ObtainedCourse[];
};

export type StorageUser = BaseUser;
export type UserAuth = BaseUser;

export type Folder = "courses" | "defaultCourses" | "static";
export type TypeImage = "thumb" | "full";
export type SizeImage = "desktop" | "mobile";

export type URLImageParams = {
    folder: Folder;
    prefix: string;
    size: SizeImage;
    type: TypeImage;
    id: number;
};

export type CourseDataItem = {
    id: number;
    title: string;
    description: string;
    url: string;
};

export type BestChessPlayers = {
    player_id: number;
    "@id": string;
    url: string;
    username: string;
    score: number;
    rank: number;
    country: string;
    title: string;
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

export type UserCommentData = {
    userID: number;
    username: string;
};

export type Comments = {
    id: number;
    user: UserCommentData;
    idCourse: number;
    text: string;
};
export type JsonComments = {
    id: number;
    idUser: number;
    idCourse: number;
    text: string;
};

export type BBDD = {
    users: User[];
    defaultCourses: DefualtCourse[];
    courses: Course[];
    comments: Comments[];
    opinions: JsonOpinion[];
};
