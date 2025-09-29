import { create } from "zustand";

type FeedbackMessage = {
    state: boolean;
    msg: string;
    type: "error" | "success" | null;
    path: string;
    reset: boolean;
    setState: (status: boolean) => void;
    setPath: (value: string) => void;
    setMsg: (msg: string) => void;
    setType: (type: "error" | "success" | null) => void;
};

/**
 * useFeedbackMessageStore - Zustand store for managing global feedback messages.
 *
 * This store:
 * - Holds the state of feedback messages including visibility (`state`), message text (`msg`),
 *   message type (`error` or `success`), current path (`path`), and a reset flag (`reset`).
 * - Provides setter functions to update each property:
 *    - `setState(status: boolean)` to show or hide the message.
 *    - `setMsg(msg: string)` to set the message text.
 *    - `setType(type: "error" | "success" | null)` to set the message type.
 *    - `setPath(value: string)` to set the path associated with the message.
 *
 * @returns An object containing the feedback message state and setter functions.
 */

export const useFeedbackMessageStore = create<FeedbackMessage>((set) => ({
    state: false,
    msg: "",
    type: null,
    path: "",
    reset: true,
    setPath: (value) => set({ path: value }),
    setMsg: (msg) => set({ msg: msg }),
    setType: (type) => set({ type: type }),
    setState: (status) => set({ state: status }),
}));
