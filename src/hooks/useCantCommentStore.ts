import { create } from "zustand";

type CantCommentStore = {
    cantDo: boolean;
    value: "noSesion" | "noCourse";
    setState: (status: boolean) => void;
    setValue: (value: "noSesion" | "noCourse") => void;
};

export const useCantCommentStore = create<CantCommentStore>((set) => ({
    cantDo: false,
    value: "noSesion",
    setState: (status) => set({ cantDo: status }),
    setValue: (value) => set({ value: value }),
}));
