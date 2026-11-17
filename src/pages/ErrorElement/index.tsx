import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
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
    const routeError = useRouteError();
    const error = msg ? null : routeError;
    const { t } = useTranslation();

    let title = t("common:error.title");
    let message = t("common:error.generic");

    if (isRouteErrorResponse(error) && error) {
        if (error.status === 404) {
            title = t("common:error.notFoundTitle");
            message = t("common:error.notFound");
        } else {
            title = t("common:error.statusTitle", { status: error.status });
            message = error.statusText;
        }
    } else if (error instanceof Error) {
        message = t(error.message, { defaultValue: error.message });
    }

    if (msg) message = t(msg, { defaultValue: msg });

    return (
        <section className={styles.errorElement}>
            <LightComponent top={20} right={75} />
            <LightComponent top={80} right={25} />
            <TitleHx>{title}</TitleHx>

            <p className={styles.message}>{message}</p>

            {!msg && (
                <NavLink
                    to={PATHS.index}
                    className={["button", "buttonSecondary"].join(" ")}
                >
                    {t("common:error.backHome")}
                </NavLink>
            )}

            <div className={styles.contactMessage}>
                <p>
                    {t("common:error.contactIntro")}
                </p>
                <p>chessmate@protonmail.com</p>
            </div>
        </section>
    );
}
