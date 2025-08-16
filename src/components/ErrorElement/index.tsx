import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./ErrorElement.module.css";

type Props = {
    error: Error;
    errorMsg: string;
};

function ErrorElement({ error, errorMsg }: Props) {
    console.error(error.message);
    return (
        <div className={[styles.errorElement].join(" ")}>
            <span>
                Lo sentimos mucho, ha ocurrido un error al recuperar los
                datos...
                {errorMsg && `: ${errorMsg.toLowerCase()}`}
            </span>
            <FaExclamationTriangle />
        </div>
    );
}

export default ErrorElement;
