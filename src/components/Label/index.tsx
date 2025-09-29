import { InputType } from "../../types/types";
import styles from "./Label.module.css";

type Props = {
    text: string;
    inputRef: string;
    inputType?: InputType;
};

/**
 * Label component for form inputs.
 *
 * - Renders a `<label>` element associated with a form input via `htmlFor`.
 * - Applies different styling if the input type is a checkbox.
 * - Uses CSS classes from `Label.module.css`.
 *
 * Props:
 * - `text` → The text content of the label.
 * - `inputRef` → ID of the input element the label is associated with.
 * - `inputType` → Optional. Type of the input (e.g., `"text"`, `"checkbox"`), used to adjust styling.
 *
 * @returns A styled label element linked to a form input.
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
