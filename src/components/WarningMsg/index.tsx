import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./WarningMsg.module.css";

type Props = {
    msg?: string;
};

function WarningMsg({
    msg = "No se han podido recuperar algunos cursos. Estamos trabajando para solucionarlo.",
}: Props) {
    return (
        <div className={styles.warningMsg}>
            <FaExclamationTriangle />
            <p>{msg}</p>
        </div>
    );
}

export default WarningMsg;
