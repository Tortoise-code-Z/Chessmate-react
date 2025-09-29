import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./WarningMsg.module.css";

type Props = {
    msg?: string;
};

/**
 * Displays a warning message with an exclamation icon.
 *
 * - Shows a default message if no `msg` prop is provided.
 * - Styled with CSS from `WarningMsg.module.css`.
 *
 * Props:
 * - `msg` → Optional custom message to display.
 *
 * @returns A div containing a warning icon and message.
 */

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
