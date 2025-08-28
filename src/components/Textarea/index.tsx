import { useFormContext } from "react-hook-form";
import styles from "./Textarea.module.css";

type Props = {
    placeholder?: string;
    name: string;
    classNames?: string[];
};

/**
 * Renders a textarea element connected to react-hook-form, with optional
 * placeholder and custom class names.
 *
 * @param placeholder - Optional placeholder text for the textarea.
 * @param name - The name of the field for react-hook-form registration.
 * @param classNames - Optional array of additional class names for styling.
 *
 * @returns The rendered textarea element.
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
