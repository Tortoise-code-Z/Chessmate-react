import { getImage, getImageSize } from "../utils/images";

export const LOGO_URL_PATH = "static-image-logo_500x500_.png";
export const LOGO_IMAGE = {
    image: getImage(LOGO_URL_PATH, ["static"]),
    width: getImageSize(LOGO_URL_PATH, "width"),
    height: getImageSize(LOGO_URL_PATH, "height"),
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
