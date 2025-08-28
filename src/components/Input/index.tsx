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
 * Input - A reusable input component integrated with react-hook-form.
 *
 * @param placeholder - Optional placeholder text displayed inside the input.
 * @param name - The name of the input field; also used as the form registration key.
 * @param classNames - Optional array of additional CSS class names to apply.
 * @param type - The type of the input (e.g., "text", "password", "email"). Defaults to "text".
 * @param disabled - Whether the input is disabled. Defaults to false.
 * @returns A React input element registered with react-hook-form.
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
