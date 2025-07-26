import styles from "./FieldError.module.css";

type Props = {
    message: string;
};

function FieldError({ message }: Props) {
    return <span className={[styles.fieldError].join(" ")}>{message}</span>;
}

export default FieldError;
