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
 * Component to group a form input or textarea with optional label and error message.
 *
 * - Renders an `Input` or `Textarea` based on the `type` prop.
 * - Integrates with React Hook Form to display validation errors.
 * - Supports optional label with configurable display orientation (`Row` or `Col`) and reverse layout.
 * - Allows adding child elements, e.g., buttons inside the input container.
 * - Applies error styling automatically when a validation message exists.
 *
 * Props:
 * - `label` → Optional. Text label displayed alongside the input.
 * - `name` → Form field name for registration with React Hook Form.
 * - `errorMsg` → Optional. Whether to display error messages (default: `true`).
 * - `placeholder` → Optional. Placeholder text for the input or textarea.
 * - `children` → Optional. React element, such as a button, to display inside the input group.
 * - `inputType` → Optional. Type of the input, e.g., `"text"`, `"password"`, etc.
 * - `labelDisplay` → Optional. Orientation of the label: `"Row"` or `"Col"` (default: `"Col"`).
 * - `labelReverse` → Optional. Whether to reverse the label and input order (default: `false`).
 * - `type` → Optional. Specifies `"input"` or `"textarea"` (default: `"input"`).
 * - `disabled` → Optional. Disables the input when `true` (default: `false`).
 *
 * @returns A styled input group with optional label, children, and error message handling.
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
