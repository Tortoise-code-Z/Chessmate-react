import { create } from "zustand";
import { URLImageParams } from "../types/types";

type ImageStore = {
allImages: Record<string, string>;
getImage: (params: URLImageParams) => ImageResult | null;
};

type ImageResult = {
path: string | undefined;
src: string | undefined;
};

export default create<ImageStore>((\_set, get) => ({
allImages: import.meta.glob("/src/assets/images/\*_/_.{png,jpg,jpeg,svg}", {
eager: true,
import: "default",
}),

    getImage: (params: URLImageParams) => {
        const { id, prefix, size, type, folder } = params;
        const allImages = get().allImages;

        const fullPrefixPath: string = `/src/assets/images/${folder}/${prefix}-${type}-${size}-${id}`;

        const scopedImage = Object.entries(allImages).find(([path]) =>
            path.startsWith(fullPrefixPath)
        );

        const results = {
            path: scopedImage?.[0],
            src: scopedImage?.[1],
        };

        console.log("results", results);

        if (!results.path || !results.src) return null;

        return results;
    },

}));

https://api.chess.com/pub/leaderboards
live_blitz

localStorage.setItem("userAuth", JSON.stringify({
"userID": 1,
"username": "marcelo_chess",
firstLogin: false
}))
