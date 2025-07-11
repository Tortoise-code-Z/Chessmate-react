import { ReactNode } from "react";

type Props = {
    onClick?: () => void;
    variant?: "primary" | "secondary" | "terciary";
    children: ReactNode;
    type?: "button" | "submit";
};

function Button({
    onClick,
    variant = "primary",
    children,
    type = "button",
}: Props) {
    return (
        <button type={type} onClick={onClick}>
            {children}
        </button>
    );
}

export default Button;
