import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom";
import { paths } from "../../consts/paths";
import styles from "./ErrorElement.module.css";
import LightComponent from "../../components/LightComponent";

export default function ErrorElement() {
    const error = useRouteError();

    let title = "¡Ups! Algo salió mal";
    let message = "Ocurrió un error inesperado.";

    if (isRouteErrorResponse(error)) {
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

    return (
        <section className={[styles.errorElement].join(" ")}>
            <LightComponent top={20} right={75} />
            <LightComponent top={80} right={25} />
            <h1>{title}</h1>
            <p className={[styles.message].join(" ")}>{message}</p>

            <NavLink
                to={`${paths.index}`}
                className={["button", "buttonSecondary"].join(" ")}
            >
                Volver al inicio
            </NavLink>
        </section>
    );
}
