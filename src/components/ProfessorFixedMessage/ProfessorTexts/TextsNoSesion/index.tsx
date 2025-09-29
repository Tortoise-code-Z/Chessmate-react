import { useProfessorMsgStore } from "../../../../hooks/useProfessorMsgStore";

type Props = {};

/**
 * Component displaying a message when a user cannot buy or comment due to not being logged in.
 *
 * - Uses `useProfessorMsgStore` to determine the current action (`value`) and tailor the message.
 * - Informs the user that they need to log in or register to proceed with buying or commenting.
 * - Encourages the user to register, emphasizing that it is free.
 *
 * Props:
 * - None.
 *
 * @returns A set of paragraphs guiding the user to log in or register before taking action.
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
