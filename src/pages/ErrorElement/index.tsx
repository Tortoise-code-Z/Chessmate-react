import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom";
import { PATHS } from "../../consts/paths";
import styles from "./ErrorElement.module.css";
import LightComponent from "../../components/LightComponent";
import TitleHx from "../../components/TitleHx";

type Props = {
    msg?: string;
};

/**
 * ErrorElement component that displays an error message for route or custom errors.
 *
 * Features:
 * - Light decorative components positioned at top-right.
 * - `TitleHx`: Shows the error title based on the type of error.
 * - Displays error message for route errors, custom messages, or general JavaScript errors.
 * - Conditional navigation or retry:
 *   - `NavLink` to return to home if no custom message is provided.
 *   - `Button` to reload the page if a custom message is provided.
 * - Contact information for support if the issue persists.
 *
 * State: none
 *
 * Hooks:
 * - `useRouteError`: Accesses the current route error if available.
 * - `isRouteErrorResponse`: Determines if the error is a route error response.
 *
 * Props:
 * - `msg` (string, optional): Custom error message to override route errors.
 *
 * @returns JSX element rendering a styled error message section with optional navigation or retry actions.
 */

export default function ErrorElement({ msg }: Props) {
    const error = msg ? null : useRouteError();

    let title = "¡Ups! Algo salió mal";
    let message = "Ocurrió un error inesperado.";

    if (isRouteErrorResponse(error) && error) {
        if (error.status === 404) {
            title = "404 - Página no encontrada";
            message = "La página que buscas no existe.";
        } else {
            title = `Error ${error.status}`;
            message = error.statusText;
        }
    } else if (error instanceof Error) {
        message = error.message;
    }

    if (msg) message = msg;

    return (
        <section className={styles.errorElement}>
            <LightComponent top={20} right={75} />
            <LightComponent top={80} right={25} />
            <TitleHx>{title}</TitleHx>

            <p className={styles.message}>{message}</p>

            {!msg && (
                <NavLink
                    to={`${PATHS.index}`}
                    className={["button", "buttonSecondary"].join(" ")}
                >
                    Volver al inicio
                </NavLink>
            )}

            <div className={styles.contactMessage}>
                <p>
                    Si el problema persiste, contacte con nuestro equipo por
                    correo:
                </p>
                <p>chessmate@protonmail.com</p>
            </div>
        </section>
    );
}
