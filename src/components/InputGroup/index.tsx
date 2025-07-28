import Button from "../Button";
import Input from "../Input";
import styles from "./InputGroup.module.css";
import { FieldValues, useFormContext } from "react-hook-form";
import Label from "../Label";
import FieldError from "../FieldError";
import { FaPaperPlane } from "react-icons/fa";
import { ReactNode } from "react";
import { ButtonVariant } from "../../types/types";

type Props = {
    groupType?: "submit" | "default";
    label?: string;
    name: string;
    errorMsg?: boolean;
    placeholder?: string;
    buttonText?: string;
    buttonSVG?: ReactNode;
    buttonVariant?: ButtonVariant;
};

function InputGroup<T extends FieldValues>({
    name,
    groupType = "default",
    label,
    errorMsg = true,
    placeholder,
    buttonText = "Enviar",
    buttonSVG = <FaPaperPlane />,
    buttonVariant,
}: Props) {
    const {
        formState: { errors },
    } = useFormContext<T>();

    return (
        <div className={[styles.inputGroup].join(" ")}>
            {label && <Label text={label} inputRef={name} />}
            {groupType === "submit" ? (
                <div className={[styles.inpSearchContainer].join(" ")}>
                    <Input
                        placeholder={placeholder}
                        name={name}
                        classNames={
                            errors?.[name]?.message ? ["inputError"] : []
                        }
                    />
                    <Button type="submit" variant={buttonVariant}>
                        {buttonSVG}
                        {buttonText}
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
