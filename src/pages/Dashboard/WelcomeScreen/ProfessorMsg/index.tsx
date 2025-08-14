import styles from "./ProfessorMsg.module.css";

type Props = {
    username: string;
};

function ProfessorMsg({ username }: Props) {
    return (
        <>
            <h2>
                ¡Hola!{" "}
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    Bienvenido a tu portal
                </span>{" "}
                de Chessmate
            </h2>
            <div>
                <p>
                    Me presento, soy Mate-o tu guía y profesor. Es un placer
                    conocerte{" "}
                    <span
                        className={["span-compl-color", "text-medium"].join(
                            " "
                        )}
                    >
                        {username}
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

export default ProfessorMsg;
