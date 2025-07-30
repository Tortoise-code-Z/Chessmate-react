import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import Button from "../Button";
import styles from "./ButtonGroupSelect.module.css";
import FieldError from "../FieldError";
import Label from "../Label";

type Props<T extends FieldValues> = {
    values: PathValue<T, Path<T>>[];
    label?: string;
    name: Path<T>;
};

function ButtonGroupSelect<T extends FieldValues>({
    values,
    name,
    label,
}: Props<T>) {
    const {
        register,
        setValue,
        watch,
        formState: { errors },
    } = useFormContext<T>();

    const selected = watch(name);

    return (
        <>
            {label && <Label text={label} inputRef={name} />}
            <div className={[styles.buttonGroupSelect].join(" ")}>
                {values.map((v, i) => (
                    <Button
                        key={i}
                        onClick={() => {
                            setValue(name, v, { shouldValidate: false });
                        }}
                        variant={selected === v ? "Complementary" : "Terciary"}
                    >
                        {!v ? "Ninguno" : v}
                    </Button>
                ))}
            </div>
            {errors?.[name]?.message && (
                <FieldError message={errors[name].message.toString()} />
            )}

            <input type="hidden" {...register(name)} />
        </>
    );
}

export default ButtonGroupSelect;
