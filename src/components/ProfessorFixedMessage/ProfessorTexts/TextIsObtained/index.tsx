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

function TextIsObtained({}: Props) {
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
                Ha habido un error al determinar si este curso lo tienes
                obtenido.
            </p>

            <p>
                Por motivos de seguridad hemos desabilitado su compra en esta
                sección.
            </p>
            <p>Revisa si lo tienes obtenido en tu portal.</p>
            <p>¡Lo sentimos mucho!</p>
        </>
    );
}

export default TextIsObtained;
