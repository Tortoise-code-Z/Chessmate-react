import { FaExclamationTriangle } from "react-icons/fa";
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
};

function ErrorElement({
    error,
    errorMsg,
    classNames = [],
    buttonAction,
    linkAction,
}: Props) {
    console.error(error.message);
    return (
        <div className={[styles.errorElement, ...classNames].join(" ")}>
            <span className={[styles.errorMsg].join(" ")}>
                Lo sentimos mucho, ha ocurrido un error
                {errorMsg && `: ${errorMsg.toLowerCase()}`}
            </span>
            <FaExclamationTriangle />
            {buttonAction && (
                <Button onClick={buttonAction.onClick}>
                    {buttonAction.text}
                </Button>
            )}
            {linkAction && (
                <NavLink
                    className={["button", "buttonPrimary"].join(" ")}
                    to={linkAction.to}
                >
                    {linkAction.text}
                </NavLink>
            )}
        </div>
    );
}

export default ErrorElement;
