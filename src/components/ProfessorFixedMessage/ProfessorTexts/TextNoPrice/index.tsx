type Props = {};

/**
 * Component displaying a message when the course price is unavailable.
 *
 * - Informs the user that the system could not retrieve the course price.
 * - Explains that the issue is being resolved and purchase will be possible once fixed.
 * - Provides an apology for the inconvenience.
 *
 * Props:
 * - None.
 *
 * @returns A set of paragraphs explaining the price issue and next steps.
 */

function TextNoPrice({}: Props) {
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
                En este momento no hemos podido recuperar el precio de este
                curso.
            </p>

            <p>
                Estamos trabajando duro para poder solucionar el problema. Una
                vez se solucione, podrás comprarlo sin compromiso.
            </p>
            <p>¡Lo sentimos mucho!</p>
        </>
    );
}

export default TextNoPrice;
