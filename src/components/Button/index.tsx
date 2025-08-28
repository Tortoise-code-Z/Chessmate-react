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

/**
 * Reusable Button component.
 *
 * - Renders a button element with optional styling variants.
 * - Handles click events and can optionally stop event propagation.
 * - Supports additional CSS classes and disables state.
 *
 * Props:
 * - `onClick` → Optional click handler function `(e: MouseEvent<HTMLButtonElement>) => void`.
 * - `variant` → Optional visual style of the button (default: `"Primary"`).
 * - `children` → Button content, can be text or JSX elements.
 * - `type` → Button type: `"button"` or `"submit"` (default: `"button"`).
 * - `propagation` → Whether the click event should propagate (default: `true`).
 * - `disabled` → Whether the button is disabled (default: `false`).
 * - `classNames` → Optional array of additional CSS classes.
 *
 * @returns A styled button element.
 */

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
