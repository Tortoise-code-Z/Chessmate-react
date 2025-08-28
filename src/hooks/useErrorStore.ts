import { create } from "zustand";

type ErrorStore = {
    isError: boolean;
    errorMsg: string;
    setState: (status: boolean) => void;
    setErrorMsg: (msg: string) => void;
};

/**
 * useErrorStore - Zustand store to manage global error state and messages.
 *
 * This store keeps track of whether an error has occurred and the corresponding message.
 * Useful for centralizing error handling across components.
 *
 * State:
 *  - `isError`: Boolean indicating if an error is currently active.
 *  - `errorMsg`: String containing the error message.
 *
 * Actions:
 *  - `setState(status: boolean)`: Set the `isError` state.
 *  - `setErrorMsg(msg: string)`: Set the `errorMsg` string.
 *
 */

export const useErrorStore = create<ErrorStore>((set) => ({
    isError: false,
    errorMsg: "",
    setErrorMsg: (msg) => set({ errorMsg: msg }),
    setState: (status) => set({ isError: status }),
}));
