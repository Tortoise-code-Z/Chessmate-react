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
