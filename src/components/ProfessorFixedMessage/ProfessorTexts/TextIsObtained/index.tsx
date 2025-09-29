type Props = {};

/**
 * Component displaying a message indicating an error in determining course ownership.
 *
 * - Informs the user that the system could not verify if the course is already obtained.
 * - Explains that purchase has been disabled in this section for security reasons.
 * - Advises the user to check their portal for course ownership status.
 *
 * Props:
 * - None.
 *
 * @returns A set of paragraphs with the error and guidance messages.
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
