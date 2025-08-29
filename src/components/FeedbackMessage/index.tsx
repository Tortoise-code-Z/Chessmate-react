import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";

type Props = {
    position?: "top" | "bottom";
    time?: number | "infinite";
};

/**
 * Fixed feedback message component that is displayed conditionally based on global state.
 *
 * - Retrieves the message and its type (`success` | `error`) from `useFeedbackMessageStore`.
 * - Automatically hides after a defined time or remains visible indefinitely.
 * - Its screen position can be configured at the top or bottom.
 *
 * Props:
 * - `position` → Position on the screen where the message appears (default: `"bottom"`).
 * - `time` → Time in milliseconds before hiding the message. Use `"infinite"` to keep it displayed indefinitely (default: `5000`).
 *
 * @returns Floating feedback message or `null` if not active.
 */

function FeedbackMessage({ position = "bottom", time = 5000 }: Props) {
    const {
        msg,
        type,
        reset,
        setMsg,
        setReset,
        setState,
        setType,
        state,
        path,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (time !== "infinite") {
            timeout = setTimeout(() => {
                setState(false);
                if (!reset) setReset(true);
                setMsg("");
                setType(null);
            }, time);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, [state]);

    useEffect(() => {
        if (reset) {
            setPath("");
        }
    }, [location.pathname, reset]);

    return (
        <>
            {state && path === location.pathname ? (
                <div
                    className={[
                        type === "success"
                            ? styles.successFixedMsg
                            : styles.errorFixedMsg,
                        position === "top" ? styles.msgTop : styles.msgBottom,
                        styles.fixedMsg,
                    ].join(" ")}
                >
                    <span>{msg}</span>
                </div>
            ) : null}
        </>
    );
}

export default FeedbackMessage;
