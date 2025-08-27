import { useEffect } from "react";
import styles from "./SuccessFixedMsg.module.css";

type Props = {
    successMsg: string;
    onClose: () => void;
};

function SuccessFixedMsg({ successMsg, onClose }: Props) {
    useEffect(() => {
        const timeout = setTimeout(() => {
            onClose();
        }, 3000);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <div className={styles.successFixedMsg}>
            <span>{successMsg}</span>
        </div>
    );
}

export default SuccessFixedMsg;
