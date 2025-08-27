import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";

type Props = {
    position?: "top" | "bottom";
    time?: number | "fixed";
};

function FeedbackMessage({ position = "bottom", time = 5000 }: Props) {
    const { msg, type, reset, setPath, setMsg, setReset, setState, setType } =
        useFeedbackMessageStore();
    const location = useLocation();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (time !== "fixed") {
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

    return (
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
    );
}

export default FeedbackMessage;
