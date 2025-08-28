import { useProfessorMsgStore } from "../../../../hooks/useProfessorMsgStore";

type Props = {};

/**
 * Component that displays a message to users who try to buy or comment on a course
 * without being logged in.
 *
 * - Uses `useProfessorMsgStore` to determine the specific scenario.
 * - Informs the user whether they need to log in, register, or buy the course.
 * - Provides a friendly, encouraging message about joining the platform.
 *
 * Props:
 * - None.
 *
 * @returns A set of paragraphs guiding the user on the required actions to interact with the course.
 */

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
