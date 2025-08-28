import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";

type Props = {
    position?: "top" | "bottom";
    time?: number | "infinite";
};

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
    }, []);

    useEffect(() => {
        if (reset) {
            setPath("");
        } else {
            setReset(true);
        }
    }, [location.pathname]);

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
