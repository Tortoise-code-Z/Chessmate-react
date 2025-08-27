import { useEffect } from "react";
import styles from "./ErrorFixedMsg.module.css";
// import { useFeedbackMessageStore } from "../../../hooks/useFeedbackMesssageStore";

type Props = {
    errorMsg: string;
    onClose: () => void;
};

function ErrorFixedMsg({ errorMsg, onClose }: Props) {
    // const { state } = useFeedbackMessageStore();

    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.errorFixedMsg}>
            <span>{errorMsg}</span>
        </div>
    );
}

export default ErrorFixedMsg;
