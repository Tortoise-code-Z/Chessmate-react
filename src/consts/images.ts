import { Images } from "../types/types";
import { getImage, getImageSize } from "../utils/images";

export const LOGO_URL_PATH = "static-image-logo_500x500_.webp";
export const LOGO_IMAGE: Images = {
    image: getImage(LOGO_URL_PATH, ["static"]),
    width: getImageSize(LOGO_URL_PATH, "width"),
    height: getImageSize(LOGO_URL_PATH, "height"),
    alt: "Chessmate",
};

export const AVATAR_DEFAULT_URL_PATH =
    "static-image-avatar-default_640x640_.webp";
export const AVATAR_DEFAULT_IMAGE: Images = {
    image: getImage(AVATAR_DEFAULT_URL_PATH, ["static"]),
    width: getImageSize(AVATAR_DEFAULT_URL_PATH, "width"),
    height: getImageSize(AVATAR_DEFAULT_URL_PATH, "height"),
    alt: undefined,
};

export const PROFESSOR_URL_PATH = "static-image-professor_500x500_.webp";
export const PROFESSOR_IMAGE: Images = {
    image: getImage(PROFESSOR_URL_PATH, ["static"]),
    width: getImageSize(PROFESSOR_URL_PATH, "width"),
    height: getImageSize(PROFESSOR_URL_PATH, "height"),
    alt: "Professor image",
};

export const AUTHOR_DEFAULT_IMAGE_URL_PATH =
    "authors-alvaro-rico_640x425_.webp";
export const AUTHOR_DEFAULT_IMAGE: Images = {
    image: getImage(AUTHOR_DEFAULT_IMAGE_URL_PATH, ["authors"]),
    width: getImageSize(AUTHOR_DEFAULT_IMAGE_URL_PATH, "width"),
    height: getImageSize(AUTHOR_DEFAULT_IMAGE_URL_PATH, "height"),
    alt: "Default image",
};

export const SIGNIN_URL_PATH = "static-image-signin_1920x1280_.webp";
export const SIGNIN_IMAGE: Images = {
    image: getImage(SIGNIN_URL_PATH, ["static"]),
    width: getImageSize(SIGNIN_URL_PATH, "width"),
    height: getImageSize(SIGNIN_URL_PATH, "height"),
    alt: "Registro",
};

export const CONTACT_URL_PATH = "static-image-contact_1920x2687_.webp";
export const CONTACT_IMAGE: Images = {
    image: getImage(CONTACT_URL_PATH, ["static"]),
    width: getImageSize(CONTACT_URL_PATH, "width"),
    height: getImageSize(CONTACT_URL_PATH, "height"),
    alt: "Registro",
};

export const DEFAULT_COURSE_URL_PATH = "static-image-courseImage_640x502_.webp";
export const DEFAULT_COURSE_IMAGE: Images = {
    image: getImage(DEFAULT_COURSE_URL_PATH, ["static"]),
    width: getImageSize(DEFAULT_COURSE_URL_PATH, "width"),
    height: getImageSize(DEFAULT_COURSE_URL_PATH, "height"),
    alt: "Contacta con nuestro equipo",
};

export const DEFAULT_DEFAULT_COURSE_URL_PATH =
    "static-image-defaultCourseImage_640x502_.webp";
export const DEFAULT_DEFAULT_COURSE_IMAGE: Images = {
    image: getImage(DEFAULT_DEFAULT_COURSE_URL_PATH, ["static"]),
    width: getImageSize(DEFAULT_DEFAULT_COURSE_URL_PATH, "width"),
    height: getImageSize(DEFAULT_DEFAULT_COURSE_URL_PATH, "height"),
    alt: "Contacta con nuestro equipo",
};

export const DEFAULT_AUTHOR_URL_PATH =
    "static-image-defaultAuthorImage_640x360_.webp";
export const DEFAULT_AUTHOR_IMAGE: Images = {
    image: getImage(DEFAULT_AUTHOR_URL_PATH, ["static"]),
    width: getImageSize(DEFAULT_AUTHOR_URL_PATH, "width"),
    height: getImageSize(DEFAULT_AUTHOR_URL_PATH, "height"),
    alt: "Contacta con nuestro equipo",
};

export const DEFAULT_BOARD_URL_PATH = "static-image-board_1719x1719_.webp";
export const DEFAULT_BOARD_IMAGE: Images = {
    image: getImage(DEFAULT_BOARD_URL_PATH, ["static"]),
    width: getImageSize(DEFAULT_BOARD_URL_PATH, "width"),
    height: getImageSize(DEFAULT_BOARD_URL_PATH, "height"),
    alt: "Tablero",
};
