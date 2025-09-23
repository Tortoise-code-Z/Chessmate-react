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
 * This store handles the state of user feedback messages, including type, content, and navigation path.
 * Useful for displaying notifications or alerts across different components.
 *
 * State:
 *  - `state`: Boolean indicating if a feedback message is active.
 *  - `msg`: String containing the feedback message.
 *  - `type`: Type of message, either `"error"`, `"success"`, or `null`.
 *  - `path`: String representing a redirect path after showing the message.
 *  - `reset`: Boolean indicating if the feedback state should reset automatically.
 *
 * Actions:
 *  - `setState(status: boolean)`: Updates the `state`.
 *  - `setReset(status: boolean)`: Updates the `reset` flag.
 *  - `setPath(value: string)`: Updates the `path`.
 *  - `setMsg(msg: string)`: Updates the feedback `msg`.
 *  - `setType(type: "error" | "success" | null)`: Updates the message `type`.
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
