import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {
    onClose: () => void;
    position?: "top" | "bottom";
    time?: number | "fixed";
};

function FeedbackMessage({ onClose, position = "bottom", time = 5000 }: Props) {
    const { msg, type } = useFeedbackMessageStore();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (time !== "fixed") {
            timeout = setTimeout(() => {
                onClose();
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
