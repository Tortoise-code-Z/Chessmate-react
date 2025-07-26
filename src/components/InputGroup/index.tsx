import { FaSearch } from "react-icons/fa";
import Button from "../Button";
import Input from "../Input";
import styles from "./InputGroup.module.css";
import { FieldValues, useFormContext } from "react-hook-form";
import Label from "../Label";
import FieldError from "../FieldError";

type Props = {
    groupType?: "search" | "default";
    label?: string;
    name: string;
    errorMsg?: boolean;
};

function InputGroup<T extends FieldValues>({
    name,
    groupType = "default",
    label,
    errorMsg = true,
}: Props) {
    const {
        formState: { errors },
    } = useFormContext<T>();

    return (
        <div className={[styles.inputGroup].join(" ")}>
            {label && <Label text={label} inputRef={name} />}
            {groupType === "search" ? (
                <div className={[styles.inpSearchContainer].join(" ")}>
                    <Input
                        name={name}
                        classNames={
                            errors?.[name]?.message ? ["inputError"] : []
                        }
                    />
                    <Button type="submit">
                        <FaSearch />
                        Buscar
                    </Button>
                </div>
            ) : (
                <Input
                    name={name}
                    classNames={errors?.[name]?.message ? ["inputError"] : []}
                />
            )}
            {errorMsg && errors?.[name]?.message && (
                <FieldError message={errors[name].message.toString()} />
            )}
        </div>
    );
}

export default InputGroup;
