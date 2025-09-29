import { useFormContext } from "react-hook-form";
import styles from "./Textarea.module.css";

type Props = {
    placeholder?: string;
    name: string;
    classNames?: string[];
};

/**
 * Textarea component integrated with react-hook-form.
 *
 * - Registers the textarea with `useFormContext` to handle form state.
 * - Supports custom placeholder and additional CSS classes.
 * - Defaults to 8 rows.
 *
 * Props:
 * - `placeholder` → Optional placeholder text for the textarea.
 * - `name` → Field name used for form registration.
 * - `classNames` → Optional array of CSS class names to apply.
 *
 * @returns A styled textarea element.
 */

function Textarea({ placeholder, name, classNames = [] }: Props) {
    const { register } = useFormContext();
    return (
        <textarea
            {...register(name)}
            id={name}
            placeholder={placeholder}
            className={[
                styles.textarea,
                ...classNames?.map((c) => styles[c]),
            ].join(" ")}
            rows={8}
        />
    );
}

export default Textarea;
