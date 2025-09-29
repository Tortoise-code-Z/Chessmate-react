import { FieldValues, Path, PathValue, useFormContext } from "react-hook-form";
import styles from "./ButtonGroupSelect.module.css";
import Label from "../Label";
import Button from "../Button";
import FieldError from "../FieldError";

type Props<T extends FieldValues> = {
    values: PathValue<T, Path<T>>[];
    label?: string;
    name: Path<T>;
};

/**
 * Button group selector integrated with React Hook Form.
 *
 * - Renders a group of buttons for selecting a single value.
 * - Synchronizes the selected value with form state using `useFormContext`.
 * - Highlights the active button based on the current selection.
 * - Displays a label if provided and shows validation errors when present.
 * - Includes a hidden input to ensure the field is registered in the form.
 *
 * Props:
 * - `values` → Array of selectable values for the button group.
 * - `label` → Optional. Text label displayed above the button group.
 * - `name` → Field name to register with React Hook Form.
 *
 * @returns A button group input with label, validation, and form integration.
 */

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
            <div className={styles.buttonGroupSelect}>
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
