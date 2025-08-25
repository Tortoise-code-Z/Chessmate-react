import { PiSignInBold } from "react-icons/pi";
import { PROFESSOR_IMAGE } from "../../consts/images";
import Button from "../Button";
import styles from "./CantDoAction.module.css";
import { useNavigate } from "react-router-dom";
import { paths } from "../../consts/paths";
import { useEffect } from "react";

type Props = {
    setState: (status: boolean) => void;
    action: "buy" | "noSesion" | "noCourse";
};

function CantDoAction({ setState, action }: Props) {
    const navigate = useNavigate();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className={[styles.cantBuyModal].join(" ")}>
            <div className={[styles.imageContain].join(" ")}>
                <figure>
                    <img
                        src={PROFESSOR_IMAGE.image}
                        title={PROFESSOR_IMAGE.alt}
                        alt={PROFESSOR_IMAGE.alt}
                        width={PROFESSOR_IMAGE.width}
                        height={PROFESSOR_IMAGE.height}
                    />
                </figure>
            </div>

            <div className={[styles.dataContainer].join(" ")}>
                <div className={[styles.data].join(" ")}>
                    <p className={[styles.dataWelcome].join(" ")}>
                        <span
                            className={[
                                "span-pr-color",
                                "text-medium",
                                "size-140",
                            ].join(" ")}
                        >
                            ¡Hola!
                        </span>{" "}
                        Para poder {action === "buy" ? "comprar" : "comentar"}{" "}
                        un curso, necesitas{" "}
                        <span
                            className={[
                                "span-compl-color",
                                "text-bold-italic",
                            ].join(" ")}
                        >
                            {action === "noCourse" && "comprarlo"}
                            {action === "buy" && "iniciar sesion o registrarte"}
                            {action === "noSesion" &&
                                "iniciar sesion o registrarte"}
                        </span>
                        .
                    </p>
                    {action === "noCourse" && (
                        <>
                            <p className={[styles.dataCallToAction].join(" ")}>
                                Es por seguridad de todos. Para mantener el
                                orden en los comentarios.
                            </p>
                            <p className={[styles.dataBye].join(" ")}>
                                ¡Espero compres el curso y te guste!
                            </p>
                        </>
                    )}
                    {action !== "noCourse" && (
                        <>
                            <p className={[styles.dataCallToAction].join(" ")}>
                                ¡Y es completamente gratuito! Si decides
                                registrarte, te estaré esperando en tu portal de
                                estudiante.
                            </p>
                            <p className={[styles.dataBye].join(" ")}>
                                ¡Espero verte pronto!
                            </p>
                        </>
                    )}
                </div>

                <div className={[styles.actions].join(" ")}>
                    <Button
                        variant={
                            action === "noCourse" ? "Primary" : "Secondary"
                        }
                        onClick={() => setState(false)}
                    >
                        Cerrar y volver
                    </Button>
                    {action !== "noCourse" && (
                        <>
                            <Button
                                variant="Complementary"
                                onClick={() => {
                                    setState(false);
                                    navigate(`/${paths.login}`);
                                }}
                            >
                                Iniciar sesión
                            </Button>
                            <Button
                                variant="Primary"
                                onClick={() => {
                                    setState(false);
                                    navigate(`/${paths.register}`);
                                }}
                            >
                                <PiSignInBold />
                                Registrarme
                            </Button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default CantDoAction;
