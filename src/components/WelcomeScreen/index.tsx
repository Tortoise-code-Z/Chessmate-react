import { PROFESSOR_IMAGE } from "../../consts/images";
import { FaChessPawn } from "react-icons/fa";

import Button from "../Button";
import styles from "./WelcomeScreen.module.css";

type Props = {
    onClick: () => void;
};

function WelcomeScreen({ onClick }: Props) {
    return (
        <div className={[styles.welcomeScreen].join(" ")}>
            <div className={[styles.professorContainer].join(" ")}>
                <figure>
                    <img
                        src={PROFESSOR_IMAGE.image}
                        alt={PROFESSOR_IMAGE.alt}
                        title={PROFESSOR_IMAGE.alt}
                        width={PROFESSOR_IMAGE.width}
                        height={PROFESSOR_IMAGE.height}
                    />
                </figure>
            </div>
            <div className={[styles.professorMsg].join(" ")}>
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
                            Manolo_73.
                        </span>
                    </p>
                    <p>
                        Conmigo irás paso a paso convirtiéndote en un super
                        jugador de ajedrez. Soy quién te explicará cada sección
                        de tus cursos.{" "}
                    </p>
                    <p className={["text-medium"].join(" ")}>
                        Pero bueno, no quiero marearte, espero que disfrutes de
                        la experiencia, te espero en el tablero.
                    </p>
                    <p>¡Qué nada te pare, adelante!</p>
                </div>
                <Button onClick={onClick}>
                    <FaChessPawn />
                    Comenzar
                </Button>
            </div>
        </div>
    );
}

export default WelcomeScreen;
