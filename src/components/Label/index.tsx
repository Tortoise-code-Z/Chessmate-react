import styles from "./Label.module.css";

type Props = {
    text: string;
    inputRef: string;
};

function Label({ text, inputRef }: Props) {
    return (
        <label className={[styles.label].join(" ")} htmlFor={inputRef}>
            {text}
        </label>
    );
}

export default Label;
