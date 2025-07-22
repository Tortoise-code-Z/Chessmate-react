import { ReactNode } from "react";
import { MouseEvent } from "react";
import styles from "./Button.module.css";

type Props = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: "Primary" | "Secondary" | "Terciary" | "Complementary";
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
