import { create } from "zustand";

type CantBuyStore = {
    cantDo: boolean;
    setState: (status: boolean) => void;
};

/**
 * useCantBuyStore - Zustand store for managing a global "cannot buy" state.
 *
 * This store tracks whether a purchase action is currently disallowed,
 * allowing centralized control of purchase restrictions across components.
 *
 * State:
 *  - `cantDo`: Boolean indicating if the user cannot perform the purchase action.
 *
 * Actions:
 *  - `setState(status: boolean)`: Updates the `cantDo` state.
 */

export const useCantBuyStore = create<CantBuyStore>((set) => ({
    cantDo: false,
    setState: (status) => set({ cantDo: status }),
}));
