import { create } from "zustand";

type ErrorStore = {
    isError: boolean;
    errorMsg: string;
    setState: (status: boolean) => void;
    setErrorMsg: (msg: string) => void;
};

export const useErrorStore = create<ErrorStore>((set) => ({
    isError: false,
    errorMsg: "",
    setErrorMsg: (msg) => set({ errorMsg: msg }),
    setState: (status) => set({ isError: status }),
}));
