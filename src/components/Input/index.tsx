import { useFormContext } from "react-hook-form";
import styles from "./Input.module.css";
import { InputType } from "../../types/types";

type Props = {
    placeholder?: string;
    name: string;
    classNames?: string[];
    type?: InputType;
};

function Input({ placeholder, name, classNames, type = "text" }: Props) {
    const { register } = useFormContext();
    return (
        <input
            {...register(name)}
            id={name}
            type={type}
            placeholder={placeholder}
            className={[
                styles.input,
                ...(classNames?.map((c) => styles[c]) ?? []),
            ].join(" ")}
        />
    );
}

export default Input;
