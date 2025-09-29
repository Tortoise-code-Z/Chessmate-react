import TitleHx from "../../../TitleHx";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import styles from "./TextsFirstLogin.module.css";

type Props = {};

/**
 * Component displaying a welcome message for first-time users.
 *
 * - Greets the user by name if available, otherwise defaults to "Estudiante".
 * - Introduces "Mate-o" as the guide and professor for the courses.
 * - Provides an encouraging and friendly introduction to the learning experience.
 * - Uses `TitleHx` for the main title and styles from `TextsFirstLogin.module.css`.
 *
 * Props:
 * - None.
 *
 * @returns A styled welcome message for first-time users, including title and introduction paragraphs.
 */

function TextsFirstLogin({}: Props) {
    const { user } = useUserAuthStore();
    return (
        <>
            <TitleHx classNames={[styles.welcomeTitle]} level={2}>
                ¡Hola!{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    Bienvenido a tu portal
                </span>{" "}
                de Chessmate
            </TitleHx>

            <div className={styles.msgContainer}>
                <p>
                    Me presento, soy Mate-o tu guía y profesor. Es un placer
                    conocerte{" "}
                    <span
                        className={["span-compl-color", "text-medium"].join(
                            " "
                        )}
                    >
                        {user ? user.username : "Estudiante"}
                    </span>
                </p>
                <p className={styles.respPar2}>
                    Conmigo irás paso a paso convirtiéndote en un super jugador
                    de ajedrez. Soy quién te explicará cada sección de tus
                    cursos.{" "}
                </p>
                <p className={["text-medium", styles.respPar].join(" ")}>
                    Pero bueno, no quiero marearte, espero que disfrutes de la
                    experiencia, te espero en el tablero.
                </p>
            </div>
        </>
    );
}

export default TextsFirstLogin;
