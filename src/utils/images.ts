import { IMAGES_PATH_RE } from "../consts/general";
import { Images } from "../types/types";
import { regExpCheck } from "./general";

export const getImage = (
    name: string | null | undefined,
    folders: string[]
) => {
    if (!regExpCheck(name, IMAGES_PATH_RE) || !name || name.length === 0)
        return undefined;
    const folderPath = folders.join("/");
    return new URL(`../assets/images/${folderPath}/${name}`, import.meta.url)
        .href;
};

export const getVideo = (name: string | null | undefined) => {
    if (!name) return undefined;
    return new URL(`../assets/videos/${name}`, import.meta.url).href;
};

export const getImageSize = (
    itemToSplit: string | null | undefined,
    dimension: "width" | "height"
) => {
    if (
        !regExpCheck(itemToSplit, IMAGES_PATH_RE) ||
        !itemToSplit ||
        itemToSplit.length === 0
    )
        return undefined;
    const splitNumber: number = dimension === "width" ? 0 : 1;
    return Number(itemToSplit.split("_")[1].split("x")[splitNumber]);
};

export const getImageData: (url: string, alt: string) => Images = (
    url,
    alt
) => {
    return {
        image: getImage(url, ["static"]),
        width: getImageSize(url, "width"),
        height: getImageSize(url, "height"),
        alt: alt,
    };
};
