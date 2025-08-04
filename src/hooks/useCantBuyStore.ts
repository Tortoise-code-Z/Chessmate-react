import { create } from "zustand";

type CantBuyStore = {
    cantBuy: boolean;
    setState: (status: boolean) => void;
};

export const useCantBuyStore = create<CantBuyStore>((set) => ({
    cantBuy: false,
    setState: (status) => set({ cantBuy: status }),
}));
