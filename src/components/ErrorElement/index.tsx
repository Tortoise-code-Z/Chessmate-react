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
            <span>
                Lo sentimos mucho, ha ocurrido un error al recuperar los
                datos...
                {errorMsg && `: ${errorMsg.toLowerCase()}`}
            </span>
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

            <FaExclamationTriangle />
        </div>
    );
}

export default ErrorElement;
