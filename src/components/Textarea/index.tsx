import { useFormContext } from "react-hook-form";
import styles from "./Textarea.module.css";

type Props = {
    placeholder?: string;
    name: string;
    classNames?: string[];
};

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
