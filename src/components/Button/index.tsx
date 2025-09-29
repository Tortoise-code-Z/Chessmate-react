import { MutableRefObject, ReactNode } from "react";
import { MouseEvent } from "react";
import { AnimatedViewOptions, ButtonVariant } from "../../types/types";
import { AnimatedInView } from "../AnimatedInView";

type Props = {
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    variant?: ButtonVariant;
    children: ReactNode;
    type?: "button" | "submit";
    propagation?: boolean;
    disabled?: boolean;
    classNames?: string[];
    buttonRef?: MutableRefObject<HTMLButtonElement | null>;
    animatedOptions?: AnimatedViewOptions;
};

/**
 * Reusable Button component.
 *
 * - Renders a customizable button with multiple style variants.
 * - Handles click events and allows preventing event propagation.
 * - Supports disabled state, refs, and custom CSS classes.
 * - Can be wrapped with `AnimatedInView` to apply entry animations.
 *
 * Props:
 * - `onClick` → Optional. Click handler function `(e: MouseEvent<HTMLButtonElement>) => void`.
 * - `variant` → Optional. Visual style variant of the button (default: `"Primary"`).
 * - `children` → Content inside the button (text, icons, or JSX elements).
 * - `type` → Optional. Button type: `"button"` or `"submit"` (default: `"button"`).
 * - `propagation` → Optional. If `false`, stops click event propagation (default: `true`).
 * - `disabled` → Optional. Disables the button when `true` (default: `false`).
 * - `classNames` → Optional. Array of extra CSS class names.
 * - `buttonRef` → Optional. Ref to access the underlying `<button>` element.
 * - `animatedOptions` → Optional. Animation configuration passed to `AnimatedInView`.
 *
 * @returns A styled button element, optionally animated on entry.
 */

function Button({
    onClick,
    variant = "Primary",
    children,
    type = "button",
    propagation = true,
    disabled = false,
    classNames = [],
    buttonRef,
    animatedOptions,
}: Props) {
    const className = ["button", `button${variant}`, ...classNames].join(" ");
    const button = (
        <button
            ref={buttonRef}
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
    return (
        <>
            {!!animatedOptions ? (
                <AnimatedInView config={animatedOptions}>
                    {button}
                </AnimatedInView>
            ) : (
                <>{button}</>
            )}
        </>
    );
}

export default Button;
