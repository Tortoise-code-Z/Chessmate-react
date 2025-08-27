import { create } from "zustand";

type FeedbackMessage = {
    state: boolean;
    msg: string;
    type: "error" | "success";
    path: string;
    setState: (status: boolean) => void;
    setPath: (value: string) => void;
    setMsg: (msg: string) => void;
    setType: (type: "error" | "success") => void;
};

export const useFeedbackMessageStore = create<FeedbackMessage>((set) => ({
    state: false,
    msg: "",
    type: "error",
    path: "",
    setPath: (value) => set({ path: value }),
    setMsg: (msg) => set({ msg: msg }),
    setType: (type) => set({ type: type }),
    setState: (status) => set({ state: status }),
}));
