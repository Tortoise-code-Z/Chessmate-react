import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {
    onClose: () => void;
    position?: "top" | "bottom";
};

function FeedbackMessage({ onClose, position = "bottom" }: Props) {
    const { msg, type } = useFeedbackMessageStore();

    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timeout);
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
