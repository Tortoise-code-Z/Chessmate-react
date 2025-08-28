import { create } from "zustand";

type SuccessStore = {
    isSuccess: boolean;
    successMsg: string;
    setState: (status: boolean) => void;
    setSuccessMsg: (msg: string) => void;
};

/**
 * useSuccessStore - Zustand store for managing global success state and messages.
 *
 * This store tracks whether a success event has occurred and the corresponding message,
 * allowing centralized success handling across components.
 *
 * State:
 *  - `isSuccess`: Boolean indicating if a success event is currently active.
 *  - `successMsg`: String containing the success message.
 *
 * Actions:
 *  - `setState(status: boolean)`: Updates the `isSuccess` state.
 *  - `setSuccessMsg(msg: string)`: Updates the `successMsg` string.
 */

export const useSuccessStore = create<SuccessStore>((set) => ({
    isSuccess: false,
    successMsg: "",
    setSuccessMsg: (msg) => set({ successMsg: msg }),
    setState: (status) => set({ isSuccess: status }),
}));
