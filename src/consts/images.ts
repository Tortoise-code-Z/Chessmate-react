import { getImageData } from "../utils/images";

export const LOGO_URL_PATH = "static-image-logo_500x500_.webp";
export const LOGO_IMAGE = getImageData(LOGO_URL_PATH, "Chessmate");

export const AVATAR_DEFAULT_URL_PATH =
    "static-image-avatar-default_640x640_.webp";
export const AVATAR_DEFAULT_IMAGE = getImageData(
    AVATAR_DEFAULT_URL_PATH,
    "Avatar usuario"
);

export const PROFESSOR_URL_PATH = "static-image-professor_500x500_.webp";
export const PROFESSOR_IMAGE = getImageData(
    PROFESSOR_URL_PATH,
    "Professor Mate-o"
);

export const SIGNIN_URL_PATH = "static-image-signin_1920x1280_.webp";
export const SIGNIN_IMAGE = getImageData(SIGNIN_URL_PATH, "");

export const CONTACT_URL_PATH = "static-image-contact_1920x2687_.webp";
export const CONTACT_IMAGE = getImageData(CONTACT_URL_PATH, "");

export const DEFAULT_COURSE_URL_PATH = "static-image-courseImage_640x502_.webp";
export const DEFAULT_COURSE_IMAGE = getImageData(
    DEFAULT_COURSE_URL_PATH,
    "Curso"
);

export const DEFAULT_DEFAULT_COURSE_URL_PATH =
    "static-image-defaultCourseImage_640x502_.webp";
export const DEFAULT_DEFAULT_COURSE_IMAGE = getImageData(
    DEFAULT_DEFAULT_COURSE_URL_PATH,
    "Curso"
);

export const DEFAULT_AUTHOR_URL_PATH =
    "static-image-defaultAuthorImage_640x360_.webp";
export const DEFAULT_AUTHOR_IMAGE = getImageData(
    DEFAULT_AUTHOR_URL_PATH,
    "Autor/a"
);

export const DEFAULT_BOARD_URL_PATH = "static-image-board_1719x1719_.webp";
export const DEFAULT_BOARD_IMAGE = getImageData(
    DEFAULT_BOARD_URL_PATH,
    "Tablero"
);
