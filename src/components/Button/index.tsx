import { ReactNode } from "react";
import styles from "./Button.module.css";

type Props = {
    onClick?: () => void;
    variant?: "Primary" | "Secondary" | "Terciary";
    children: ReactNode;
    type?: "button" | "submit";
};

function Button({
    onClick,
    variant = "Primary",
    children,
    type = "button",
}: Props) {
    const className = ["button", `button${variant}`].join(" ");
    return (
        <button className={className} type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
