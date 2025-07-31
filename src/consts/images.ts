import { getImage, getImageSize } from "../utils/images";

export const LOGO_URL_PATH = "static-image-logo_500x500_.png";
export const LOGO_IMAGE = {
    image: getImage(LOGO_URL_PATH, ["static"]),
    width: getImageSize(LOGO_URL_PATH, "width"),
    height: getImageSize(LOGO_URL_PATH, "height"),
    alt: "Chessmate",
};

export const AVATAR_DEFAULT_URL_PATH =
    "static-image-avatar-default_640x640_.png";
export const AVATAR_DEFAULT_IMAGE = {
    image: getImage(AVATAR_DEFAULT_URL_PATH, ["static"]),
    width: getImageSize(AVATAR_DEFAULT_URL_PATH, "width"),
    height: getImageSize(AVATAR_DEFAULT_URL_PATH, "height"),
};

export const PROFESSOR_URL_PATH = "static-image-professor_500x500_.png";
export const PROFESSOR_IMAGE = {
    image: getImage(PROFESSOR_URL_PATH, ["static"]),
    width: getImageSize(PROFESSOR_URL_PATH, "width"),
    height: getImageSize(PROFESSOR_URL_PATH, "height"),
    alt: "Professor image",
};

export const AUTHOR_DEFAULT_IMAGE_URL_PATH = "authors-alvaro-rico_640x425_.jpg";
export const AUTHOR_DEFAULT_IMAGE = {
    image: getImage(AUTHOR_DEFAULT_IMAGE_URL_PATH, ["authors"]),
    width: getImageSize(AUTHOR_DEFAULT_IMAGE_URL_PATH, "width"),
    height: getImageSize(AUTHOR_DEFAULT_IMAGE_URL_PATH, "height"),
    alt: "Default image",
};

export const SIGNIN_URL_PATH = "static-image-signin_1920x1280_.jpg";
export const SIGNIN_IMAGE = {
    image: getImage(SIGNIN_URL_PATH, ["static"]),
    width: getImageSize(SIGNIN_URL_PATH, "width"),
    height: getImageSize(SIGNIN_URL_PATH, "height"),
    alt: "Registro",
};
