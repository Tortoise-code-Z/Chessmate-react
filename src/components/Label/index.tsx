import { InputType } from "../../types/types";
import styles from "./Label.module.css";

type Props = {
    text: string;
    inputRef: string;
    inputType?: InputType;
};

/**
 * Renders a label element for a form input, optionally adjusting styles
 * if the input type is a checkbox.
 *
 * @param text - The text to display inside the label.
 * @param inputRef - The id of the input element this label is associated with.
 * @param inputType - Optional type of the input to conditionally style the label.
 *
 * @returns The rendered label element.
 */

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
