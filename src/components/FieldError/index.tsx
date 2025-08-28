import styles from "./FieldError.module.css";

type Props = {
    message: string;
};

/**
 * FieldError - Component to display a validation or form error message.
 *
 * @param message - The error message to display.
 * @returns A React element showing the error message styled appropriately.
 */

function FieldError({ message }: Props) {
    return <span className={styles.fieldError}>{message}</span>;
}

export default FieldError;
