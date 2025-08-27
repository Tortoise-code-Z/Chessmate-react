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
