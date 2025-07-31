import { InputType } from "../../types/types";
import styles from "./Label.module.css";

type Props = {
    text: string;
    inputRef: string;
    inputType?: InputType;
};

function Label({ text, inputRef, inputType }: Props) {
    return (
        <label
            className={[
                styles.label,
                inputType === "checkbox" ? styles.labelCheckbox : "",
            ].join(" ")}
            htmlFor={inputRef}
        >
            {text}
        </label>
    );
}

export default Label;
