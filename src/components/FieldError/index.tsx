import styles from "./FieldError.module.css";

type Props = {
    message: string;
};

/**
 * Component to display a form field error message.
 *
 * - Renders a styled `<span>` element containing the error text.
 * - Uses CSS classes from `FieldError.module.css` for consistent styling.
 *
 * Props:
 * - `message` → The error message text to display.
 *
 * @returns A styled span element showing the provided error message.
 */

function FieldError({ message }: Props) {
    return <span className={styles.fieldError}>{message}</span>;
}

export default FieldError;
