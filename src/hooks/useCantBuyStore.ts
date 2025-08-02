import { create } from "zustand";

type CantBuyStore = {
    cantBuy: boolean;
    setState: (status: boolean) => void;
    isLoading: boolean;
    setIsLoading: (state: boolean) => void;
};

export const useCantBuyStore = create<CantBuyStore>((set) => ({
    cantBuy: false,
    isLoading: false,
    setState: (status) => set({ cantBuy: status }),
    setIsLoading: (state) => set({ isLoading: state }),
}));
