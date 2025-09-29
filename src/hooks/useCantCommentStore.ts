import { create } from "zustand";

type CantCommentStore = {
    cantDo: boolean;
    value: "noSesion" | "noCourse";
    setState: (status: boolean) => void;
    setValue: (value: "noSesion" | "noCourse") => void;
};

/**
 * useCantCommentStore - Zustand store for managing a "cannot comment" state.
 *
 * This store:
 * - Holds a boolean `cantDo` indicating whether a user is restricted from commenting.
 * - Holds a `value` indicating the reason: `"noSesion"` or `"noCourse"`.
 * - Provides `setState` to update the `cantDo` flag.
 * - Provides `setValue` to update the reason for restriction.
 *
 * @returns An object with:
 * - `cantDo` boolean flag.
 * - `value` string indicating the restriction reason.
 * - `setState(status: boolean)` function to update the flag.
 * - `setValue(value: "noSesion" | "noCourse")` function to update the reason.
 */

export const useCantCommentStore = create<CantCommentStore>((set) => ({
    cantDo: false,
    value: "noSesion",
    setState: (status) => set({ cantDo: status }),
    setValue: (value) => set({ value: value }),
}));
