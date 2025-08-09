import { create } from "zustand";

type CantCommentStore = {
    cantDo: boolean;
    setState: (status: boolean) => void;
};

export const useCantCommentStore = create<CantCommentStore>((set) => ({
    cantDo: false,
    setState: (status) => set({ cantDo: status }),
}));
