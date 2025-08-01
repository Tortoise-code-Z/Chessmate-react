import Input from "../Input";
import styles from "./InputGroup.module.css";
import { FieldValues, useFormContext } from "react-hook-form";
import Label from "../Label";
import FieldError from "../FieldError";
import { ReactElement } from "react";
import { InputType } from "../../types/types";
import { Path } from "react-hook-form";
import Textarea from "../Textarea";

type Props<T extends FieldValues> = {
    label?: string;
    name: Path<T>;
    errorMsg?: boolean;
    placeholder?: string;
    children?: ReactElement<"button">;
    inputType?: InputType;
    labelDisplay?: "Row" | "Col";
    labelReverse?: boolean;
    type?: "input" | "textarea";
    disabled?: boolean;
};

function InputGroup<T extends FieldValues>({
    name,
    label,
    errorMsg = true,
    placeholder,
    children,
    inputType,
    labelDisplay = "Col",
    labelReverse = false,
    type = "input",
    disabled = false,
}: Props<T>) {
    const {
        formState: { errors },
    } = useFormContext<T>();

    const inputComponent = (
        <Input
            type={inputType}
            placeholder={placeholder}
            name={name}
            classNames={errors?.[name]?.message ? ["inputError"] : []}
            disabled={disabled}
        />
    );

    const textareaComponent = (
        <Textarea
            placeholder={placeholder}
            name={name}
            classNames={errors?.[name]?.message ? ["inputError"] : []}
        />
    );

    const inputGroupContent = (
        <>
            {children ? (
                <div className={[styles.inpSearchContainer].join(" ")}>
                    {type === "input" ? inputComponent : textareaComponent}
                    {children}
                </div>
            ) : (
                <>{type === "input" ? inputComponent : textareaComponent}</>
            )}
        </>
    );

    const withLabel = (
        <div
            className={[
                styles[`label${labelDisplay}${labelReverse ? "Reverse" : ""}`],
            ].join(" ")}
        >
            <Label text={label || ""} inputRef={name} inputType={inputType} />
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
