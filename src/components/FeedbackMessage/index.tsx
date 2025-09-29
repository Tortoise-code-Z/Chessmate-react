import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";
import { AnimatedInView } from "../AnimatedInView";

type Props = {
    position?: "top" | "bottom";
    time?: number | "infinite";
};

/**
 * Component to display transient feedback messages on the screen.
 *
 * - Shows messages at the top or bottom of the viewport based on `position`.
 * - Automatically hides the message after a specified `time` (in milliseconds) or keeps it visible if `time` is `"infinite"`.
 * - Uses `useFeedbackMessageStore` for state management of message content, type, and visibility.
 * - Animates the message appearance using `AnimatedInView`.
 * - Differentiates styling for success and error messages.
 *
 * Props:
 * - `position` → Optional. Position of the message: `"top"` or `"bottom"` (default: `"bottom"`).
 * - `time` → Optional. Duration in milliseconds before auto-dismissal, or `"infinite"` to keep visible (default: `5000`).
 *
 * @returns An animated feedback message element displayed conditionally based on state and current path.
 */

function FeedbackMessage({ position = "bottom", time = 5000 }: Props) {
    const { msg, type, setMsg, setState, setType, setPath, state, path } =
        useFeedbackMessageStore();

    const location = useLocation();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (time !== "infinite") {
            timeout = setTimeout(() => {
                setState(false);
                setMsg("");
                setType(null);
                setPath("");
            }, time);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [state]);

    return (
        <>
            {state && path === location.pathname ? (
                <AnimatedInView config={{ duration: 0.2 }}>
                    <div
                        className={[
                            type === "success"
                                ? styles.successFixedMsg
                                : styles.errorFixedMsg,
                            position === "top"
                                ? styles.msgTop
                                : styles.msgBottom,
                            styles.fixedMsg,
                        ].join(" ")}
                    >
                        <span>{msg}</span>
                    </div>
                </AnimatedInView>
            ) : null}
        </>
    );
}

export default FeedbackMessage;
