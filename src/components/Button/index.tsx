import { ReactNode } from "react";
import { MouseEvent } from "react";
import { ButtonVariant } from "../../types/types";

type Props = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: ButtonVariant;
    children: ReactNode;
    type?: "button" | "submit";
    propagation?: boolean;
    disabled?: boolean;
    classNames?: string[];
};

function Button({
    onClick,
    variant = "Primary",
    children,
    type = "button",
    propagation = true,
    disabled = false,
    classNames = [],
}: Props) {
    const className = ["button", `button${variant}`, ...classNames].join(" ");
    return (
        <button
            disabled={disabled}
            className={className}
            type={type}
            onClick={(e) => {
                if (!propagation) e.stopPropagation();
                onClick?.(e);
            }}
        >
            {children}
        </button>
    );
}

export default Button;
