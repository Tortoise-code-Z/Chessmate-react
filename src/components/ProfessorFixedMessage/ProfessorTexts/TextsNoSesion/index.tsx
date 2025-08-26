import { useProfessorMsgStore } from "../../../../hooks/useProfessorMsgStore";

type Props = {};

function TextsNoSesion({}: Props) {
    const { value } = useProfessorMsgStore();

    return (
        <>
            <p>
                <span
                    className={[
                        "span-pr-color",
                        "text-medium",
                        "size-140",
                    ].join(" ")}
                >
                    ¡Hola!
                </span>{" "}
                Para poder {value === "cantBuySesion" ? "comprar" : "comentar"}{" "}
                un curso, necesitas{" "}
                <span
                    className={["span-compl-color", "text-bold-italic"].join(
                        " "
                    )}
                >
                    {value === "cantCommentHasntBuyCourse" && "comprarlo"}
                    {(value === "cantBuySesion" ||
                        value === "cantCommentSesion") &&
                        "iniciar sesion o registrarte"}
                </span>
                .
            </p>

            <p>
                ¡Y es completamente gratuito! Si decides registrarte, te estaré
                esperando en tu portal de estudiante.
            </p>
            <p>¡Espero verte pronto!</p>
        </>
    );
}

export default TextsNoSesion;
