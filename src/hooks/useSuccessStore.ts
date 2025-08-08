import { create } from "zustand";

type SuccessStore = {
    isSuccess: boolean;
    successMsg: string;
    setState: (status: boolean) => void;
    setSuccessMsg: (msg: string) => void;
};

export const useSuccessStore = create<SuccessStore>((set) => ({
    isSuccess: false,
    successMsg: "",
    setSuccessMsg: (msg) => set({ successMsg: msg }),
    setState: (status) => set({ isSuccess: status }),
}));
