import { create } from "zustand";
import { ProfessorValues } from "../types/types";

type ProfessorMsgStore = {
    value: ProfessorValues;
    state: boolean;
    setValue: (value: ProfessorValues) => void;
    setState: (status: boolean) => void;
};

/**
 * useProfessorMsgStore - Zustand store for managing professor-related feedback messages.
 *
 * - Holds the current `value` of the message (type `ProfessorValues`).
 * - Holds the `state` to indicate whether the message is visible or not.
 * - Provides `setValue` to update the message content.
 * - Provides `setState` to toggle the visibility of the message.
 *
 * @returns The store object containing `value`, `state`, and the setter functions.
 */

export const useProfessorMsgStore = create<ProfessorMsgStore>((set) => ({
    state: false,
    value: "cantBuySesion",
    setValue: (value: ProfessorValues) => set({ value: value }),
    setState: (status: boolean) => set({ state: status }),
}));
