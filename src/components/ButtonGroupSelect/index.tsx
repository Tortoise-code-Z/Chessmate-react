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
 * ButtonGroupSelect component integrated with react-hook-form.
 *
 * - Renders a group of buttons representing selectable values for a form field.
 * - Updates the form state when a button is clicked using `setValue`.
 * - Highlights the selected value and displays validation errors if present.
 * - Optionally shows a label for the group.
 *
 * Props:
 * - `values` → Array of possible values for the button group.
 * - `name` → Form field name associated with this group.
 * - `label` → Optional label text displayed above the buttons.
 *
 * @returns A set of styled buttons bound to a form field, with error messages and optional label.
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
