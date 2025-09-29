import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom";
import { PATHS } from "../../consts/paths";
import styles from "./ErrorElement.module.css";
import LightComponent from "../../components/LightComponent";
import TitleHx from "../../components/TitleHx";

type Props = {
    msg?: string;
};

/**
 * ErrorElement - React component that displays an error page or error message
 * when something goes wrong in the application.
 *
 * Features:
 * - Retrieves and handles route errors using `useRouteError` and `isRouteErrorResponse`.
 * - Supports custom error messages via the optional `msg` prop.
 * - Displays specific error details for HTTP status codes (e.g., 404).
 * - Falls back to a generic error title and message when details are not available.
 * - Provides navigation back to the home page (`PATHS.index`) when no custom message is set.
 * - Includes visual effects with `LightComponent` and styled messaging.
 * - Shows a contact email for further assistance.
 *
 * Props:
 * - `msg` (optional): Custom message to display instead of route-based error handling.
 *
 * @returns JSX.Element: A styled error page with title, description, optional navigation, and contact info.
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
