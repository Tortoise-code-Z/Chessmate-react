type Props = {};

/**
 * Component displaying a message when a course ID is missing or invalid.
 *
 * - Informs the user that the course purchase has been canceled for security reasons.
 * - Explains that the issue is being resolved and purchase will be possible later.
 * - Provides an apology for the inconvenience.
 *
 * Props:
 * - None.
 *
 * @returns A set of paragraphs explaining the issue and next steps.
 */

function TextNoID({}: Props) {
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
                En esta sección hemos cancelado la compra de este curso por
                motivos de seguridad.
            </p>

            <p>
                Estamos trabajando duro para poder solucionar el problema. Una
                vez se solucione, podrás comprarlo sin compromiso.
            </p>
            <p>¡Lo sentimos mucho!</p>
        </>
    );
}

export default TextNoID;
