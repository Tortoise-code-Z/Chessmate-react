import { useFormContext } from "react-hook-form";
import styles from "./Input.module.css";

type Props = {
    placeholder?: string;
    name: string;
    classNames?: string[];
};

function Input({ placeholder, name, classNames }: Props) {
    const { register } = useFormContext();
    return (
        <input
            {...register(name)}
            id={name}
            type="text"
            placeholder={placeholder}
            className={[
                styles.input,
                ...(classNames?.map((c) => styles[c]) ?? []),
            ].join(" ")}
        />
    );
}

export default Input;
