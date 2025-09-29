import { FaInfoCircle } from "react-icons/fa";
import styles from "./ErrorElement.module.css";
import Button from "../Button";
import { NavLink } from "react-router-dom";

type Props = {
    error: Error;
    errorMsg: string;
    classNames?: string[];
    buttonAction?: {
        text: string;
        onClick: () => void;
    };

    linkAction?: {
        text: string;
        to: string;
    };

    paddingLateral?: boolean;
    paddingNavbar?: boolean;
};

/**
 * Component to display a standardized error message.
 *
 * - Shows an error icon and a default error message.
 * - Can display a custom error message passed via `errorMsg`.
 * - Supports optional button and link actions for user interaction.
 * - Applies additional CSS classes and optional padding for layout adjustments.
 * - Logs the error message to the console for debugging purposes.
 *
 * Props:
 * - `error` → Error object containing the error details.
 * - `errorMsg` → Custom error message to display alongside the default text.
 * - `classNames` → Optional. Array of extra CSS classes for styling.
 * - `buttonAction` → Optional. Object with `text` and `onClick` for a button action.
 * - `linkAction` → Optional. Object with `text` and `to` for a navigation link.
 * - `paddingLateral` → Optional. Adds lateral padding to the error container.
 * - `paddingNavbar` → Optional. Adds top padding to account for the navbar.
 *
 * @returns A styled error element with optional actions and layout adjustments.
 */

function ErrorElement({
    error,
    errorMsg,
    classNames = [],
    buttonAction,
    linkAction,
    paddingLateral,
    paddingNavbar,
}: Props) {
    console.error(error.message);
    return (
        <div
            className={[
                styles.errorElement,
                paddingLateral ? styles.paddingLateral : "",
                paddingNavbar ? styles.paddingNavbar : "",
                ...classNames,
            ].join(" ")}
        >
            <div className={styles.container}>
                <FaInfoCircle />
                <span className={styles.errorMsg}>
                    Lo sentimos mucho, ha ocurrido un error
                    {errorMsg ? `: ${errorMsg.toLowerCase()}` : "."}
                </span>
                {buttonAction &&
                    buttonAction?.onClick &&
                    buttonAction?.text && (
                        <Button onClick={buttonAction.onClick}>
                            {buttonAction.text}
                        </Button>
                    )}
                {linkAction && linkAction?.text && linkAction?.to && (
                    <NavLink
                        className={["button", "buttonComplementary"].join(" ")}
                        to={linkAction.to || ""}
                    >
                        {linkAction.text}
                    </NavLink>
                )}
            </div>
        </div>
    );
}

export default ErrorElement;
