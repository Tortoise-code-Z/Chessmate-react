import { create } from "zustand";
import { ProfessorValues } from "../types/types";

type ProfessorMsgStore = {
    value: ProfessorValues;
    state: boolean;
    setValue: (value: ProfessorValues) => void;
    setState: (status: boolean) => void;
};

export const useProfessorMsgStore = create<ProfessorMsgStore>((set) => ({
    state: false,
    value: "cantBuySesion",
    setValue: (value: ProfessorValues) => set({ value: value }),
    setState: (status: boolean) => set({ state: status }),
}));
