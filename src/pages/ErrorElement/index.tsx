import { useRouteError, isRouteErrorResponse, NavLink } from "react-router-dom";
import { paths } from "../../consts/paths";
import styles from "./ErrorElement.module.css";
import LightComponent from "../../components/LightComponent";
import Button from "../../components/Button";

type Props = {
    msg?: string;
};

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
        <section className={[styles.errorElement].join(" ")}>
            <LightComponent top={20} right={75} />
            <LightComponent top={80} right={25} />
            <h1>{title}</h1>
            <p className={[styles.message].join(" ")}>{message}</p>

            {!msg && (
                <NavLink
                    to={`${paths.index}`}
                    className={["button", "buttonSecondary"].join(" ")}
                >
                    Volver al inicio
                </NavLink>
            )}

            {msg && (
                <Button
                    variant="Secondary"
                    onClick={() => window.location.reload()}
                >
                    Reintentar inicialización
                </Button>
            )}

            <div className={[styles.contactMessage].join(" ")}>
                <p>
                    Si el problema persiste, contacte con nuestro equipo por
                    correo:
                </p>
                <p>chessmate@protonmail.com</p>
            </div>
        </section>
    );
}
