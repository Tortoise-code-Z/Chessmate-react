import { FaExclamationTriangle } from "react-icons/fa";
import styles from "./ErrorElement.module.css";

type Props = {
    error: Error;
    errorMsg: string;
};

function ErrorElement({ error, errorMsg }: Props) {
    // console.error(error.message);
    return (
        <div className={[styles.errorElement].join(" ")}>
            <FaExclamationTriangle />
            <span>
                Lo sentimos mucho, ha ocurrido un error
                {errorMsg && `: ${errorMsg.toLowerCase()}`}
            </span>
            <span>Trataremos de solucionarlo lo antes posible.</span>
        </div>
    );
}

export default ErrorElement;
