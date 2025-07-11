export const getImage = (name: string, folders: string[]) => {
    const folderPath = folders.join("/");
    return new URL(`../assets/images/${folderPath}/${name}`, import.meta.url)
        .href;
};

export const getImageSize = (
    itemToSplit: string,
    dimension: "width" | "height"
) => {
    const splitNumber: number = dimension === "width" ? 0 : 1;
    return itemToSplit.split("_")[1].split("x")[splitNumber];
};
