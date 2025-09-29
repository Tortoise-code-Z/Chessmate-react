import { useFormContext } from "react-hook-form";
import styles from "./Input.module.css";
import { InputType } from "../../types/types";

type Props = {
    placeholder?: string;
    name: string;
    classNames?: string[];
    type?: InputType;
    disabled?: boolean;
};

/**
 * Input field component integrated with React Hook Form.
 *
 * - Registers the input with the form context using `useFormContext`.
 * - Supports custom placeholder text, input type, and disabled state.
 * - Allows additional CSS classes to be applied for styling.
 *
 * Props:
 * - `placeholder` → Optional. Placeholder text displayed inside the input.
 * - `name` → Name of the form field used for registration.
 * - `classNames` → Optional. Array of CSS class names to apply to the input.
 * - `type` → Optional. Input type, e.g., `"text"`, `"password"`, `"checkbox"` (default: `"text"`).
 * - `disabled` → Optional. If `true`, disables the input (default: `false`).
 *
 * @returns A styled input element registered with React Hook Form.
 */

function Input({
    placeholder,
    name,
    classNames = [],
    type = "text",
    disabled = false,
}: Props) {
    const { register } = useFormContext();
    return (
        <input
            {...register(name)}
            id={name}
            type={type}
            placeholder={placeholder}
            className={[styles.input, ...classNames.map((c) => styles[c])].join(
                " "
            )}
            disabled={disabled}
        />
    );
}

export default Input;
