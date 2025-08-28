import { create } from "zustand";

type CantCommentStore = {
    cantDo: boolean;
    value: "noSesion" | "noCourse";
    setState: (status: boolean) => void;
    setValue: (value: "noSesion" | "noCourse") => void;
};

/**
 * useCantCommentStore - Zustand store for managing restrictions on commenting.
 *
 * This store tracks whether a user is allowed to comment and the reason for restriction,
 * enabling centralized control of comment permissions across components.
 *
 * State:
 *  - `cantDo`: Boolean indicating if the user cannot comment.
 *  - `value`: String indicating the reason for restriction, either `"noSesion"` or `"noCourse"`.
 *
 * Actions:
 *  - `setState(status: boolean)`: Updates the `cantDo` state.
 *  - `setValue(value: "noSesion" | "noCourse")`: Updates the reason for restriction.
 */

export const useCantCommentStore = create<CantCommentStore>((set) => ({
    cantDo: false,
    value: "noSesion",
    setState: (status) => set({ cantDo: status }),
    setValue: (value) => set({ value: value }),
}));
