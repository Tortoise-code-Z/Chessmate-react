import { create } from "zustand";
import { ProfessorValues } from "../types/types";

type ProfessorMsgStore = {
    value: ProfessorValues;
    state: boolean;
    path: string;
    setValue: (value: ProfessorValues) => void;
    setState: (status: boolean) => void;
    setPath: (value: string) => void;
};

/**
 * useProfessorMsgStore - Zustand store for managing professor-related message states.
 *
 * This store:
 * - Holds the current message value (`value`) of type `ProfessorValues`.
 * - Tracks whether a professor message should be displayed (`state`).
 * - Provides setter functions to update state and value:
 *    - `setValue(value: ProfessorValues)` to update the message type.
 *    - `setState(status: boolean)` to show or hide the message.
 *
 * @returns An object containing the professor message state and setter functions.
 */

export const useProfessorMsgStore = create<ProfessorMsgStore>((set) => ({
    state: false,
    path: "",
    value: "cantBuySesion",
    setPath: (value: string) => set({ path: value }),
    setValue: (value: ProfessorValues) => set({ value: value }),
    setState: (status: boolean) => set({ state: status }),
}));
