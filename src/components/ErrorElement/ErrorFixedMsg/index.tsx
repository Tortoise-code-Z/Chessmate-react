import { useEffect } from "react";
import styles from "./ErrorFixedMsg.module.css";

type Props = {
    errorMsg: string;
    onClose: () => void;
};

function ErrorFixedMsg({ errorMsg, onClose }: Props) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={[styles.errorFixedMsg].join(" ")}>
            <span>{errorMsg}</span>
        </div>
    );
}

export default ErrorFixedMsg;
