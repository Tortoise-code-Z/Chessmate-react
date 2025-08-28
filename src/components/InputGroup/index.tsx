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

/**
 * A form input group that can render an input or textarea with an optional label,
 * error message, and extra child elements like buttons.
 *
 * @param name - The name of the input field (used by react-hook-form).
 * @param label - Optional label text for the input.
 * @param errorMsg - Whether to show the field error message. Defaults to true.
 * @param placeholder - Placeholder text for the input/textarea.
 * @param children - Optional child element, e.g., a button inside the input group.
 * @param inputType - The type of the input (text, number, etc.).
 * @param labelDisplay - Layout direction of the label. Defaults to "Col".
 * @param labelReverse - Whether to reverse the label and input order. Defaults to false.
 * @param type - Whether to render an input or textarea. Defaults to "input".
 * @param disabled - Whether the input is disabled. Defaults to false.
 *
 * @returns The rendered input group component.
 */

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
                <div className={styles.inpSearchContainer}>
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
        <div className={styles.inputGroup}>
            {label ? withLabel : withoutLabel}
            {errorMsg && errors?.[name]?.message && (
                <FieldError message={errors[name].message.toString()} />
            )}
        </div>
    );
}

export default InputGroup;
