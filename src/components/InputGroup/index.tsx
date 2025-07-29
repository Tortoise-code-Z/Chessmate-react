import Input from "../Input";
import styles from "./InputGroup.module.css";
import { FieldValues, useFormContext } from "react-hook-form";
import Label from "../Label";
import FieldError from "../FieldError";
import { ReactElement } from "react";
import { InputType } from "../../types/types";

type Props<T extends FieldValues> = {
    label?: string;
    name: Extract<keyof T, string>;
    errorMsg?: boolean;
    placeholder?: string;
    children?: ReactElement<"button">;
    inputType?: InputType;
    labelDisplay?: "Row" | "Col";
};

function InputGroup<T extends FieldValues>({
    name,
    label,
    errorMsg = true,
    placeholder,
    children,
    inputType,
    labelDisplay = "Col",
}: Props<T>) {
    const {
        formState: { errors },
    } = useFormContext<T>();

    const inputGroupContent = (
        <>
            {children ? (
                <div className={[styles.inpSearchContainer].join(" ")}>
                    <Input
                        type={inputType}
                        placeholder={placeholder}
                        name={name}
                        classNames={
                            errors?.[name]?.message ? ["inputError"] : []
                        }
                    />
                    {children}
                </div>
            ) : (
                <Input
                    type={inputType}
                    placeholder={placeholder}
                    name={name}
                    classNames={errors?.[name]?.message ? ["inputError"] : []}
                />
            )}
        </>
    );

    const withLabel = (
        <div
            className={[
                labelDisplay === "Col" ? styles.labelCol : styles.labelRow,
            ].join(" ")}
        >
            <Label text={label || ""} inputRef={name} />
            {inputGroupContent}
        </div>
    );

    const withoutLabel = <>{inputGroupContent}</>;

    return (
        <div className={[styles.inputGroup].join(" ")}>
            {label ? withLabel : withoutLabel}
            {errorMsg && errors?.[name]?.message && (
                <FieldError message={errors[name].message.toString()} />
            )}
        </div>
    );
}

export default InputGroup;
