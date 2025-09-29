import { create } from "zustand";

type CantBuyStore = {
    cantDo: boolean;
    setState: (status: boolean) => void;
};

/**
 * useCantBuyStore - Zustand store for managing a "cannot buy" state.
 *
 * This store:
 * - Holds a boolean `cantDo` indicating whether a user is restricted from buying.
 * - Provides a `setState` function to update the `cantDo` status.
 *
 * @returns An object with:
 * - `cantDo` boolean flag.
 * - `setState(status: boolean)` function to update the flag.
 */

export const useCantBuyStore = create<CantBuyStore>((set) => ({
    cantDo: false,
    setState: (status) => set({ cantDo: status }),
}));
