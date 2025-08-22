import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";

type Props = {
    onClose: () => void;
    msg: string;
    type?: "error" | "success";
    position?: "top" | "bottom";
};

function FeedbackMessage({
    onClose,
    msg,
    type = "error",
    position = "bottom",
}: Props) {
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
