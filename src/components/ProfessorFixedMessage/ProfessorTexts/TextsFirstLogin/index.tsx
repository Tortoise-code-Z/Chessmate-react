import TitleHx from "../../../TitleHx";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import styles from "./TextsFirstLogin.module.css";

type Props = {};

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

            <div className={[styles.msgContainer].join(" ")}>
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
