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
 * ErrorElement - Component to display error messages with optional actions.
 *
 * Displays a standardized error message along with an icon.
 * Optionally, it can render a button or a link to handle user actions.
 *
 * @param error - The error object to log and display.
 * @param errorMsg - A custom error message to display to the user.
 * @param classNames - Optional additional CSS classes for styling.
 * @param buttonAction - Optional action button with text and onClick handler.
 * @param linkAction - Optional link action with text and destination path.
 * @returns A React element representing the error state.
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
                    Lo sentimos mucho, ha ocurrido un error.
                    {errorMsg && `: ${errorMsg.toLowerCase()}`}
                </span>
                {buttonAction && (
                    <Button onClick={buttonAction.onClick}>
                        {buttonAction.text}
                    </Button>
                )}
                {linkAction && (
                    <NavLink
                        className={["button", "buttonComplementary"].join(" ")}
                        to={linkAction.to}
                    >
                        {linkAction.text}
                    </NavLink>
                )}
            </div>
        </div>
    );
}

export default ErrorElement;
