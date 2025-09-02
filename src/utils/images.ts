export const getImage = (name: string | null, folders: string[]) => {
    const folderPath = folders.join("/");
    if (!name || name.length === 0) return undefined;
    return new URL(`../assets/images/${folderPath}/${name}`, import.meta.url)
        .href;
};

export const getImageSize = (
    itemToSplit: string | null,
    dimension: "width" | "height"
) => {
    const splitNumber: number = dimension === "width" ? 0 : 1;
    if (!itemToSplit || /^_[0-9]+x[0-9]+_$/.test(itemToSplit)) return undefined;
    return Number(itemToSplit.split("_")[1].split("x")[splitNumber]);
};
