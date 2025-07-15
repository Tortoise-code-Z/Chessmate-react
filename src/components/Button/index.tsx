import { ReactNode } from "react";
import { MouseEvent } from "react";
import styles from "./Button.module.css";

type Props = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: "Primary" | "Secondary" | "Terciary";
    children: ReactNode;
    type?: "button" | "submit";
    propagation?: boolean;
};

function Button({
    onClick,
    variant = "Primary",
    children,
    type = "button",
    propagation = true,
}: Props) {
    const className = ["button", `button${variant}`].join(" ");
    return (
        <button
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
