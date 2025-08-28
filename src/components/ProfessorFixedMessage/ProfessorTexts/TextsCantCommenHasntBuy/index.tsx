type Props = {};

/**
 * Component that displays a message to users who want to comment on a course
 * without having purchased it.
 *
 * - Informs the user that they must buy the course to comment.
 * - Explains the reasoning behind this restriction for community safety.
 * - Encourages the user to purchase and enjoy the course.
 *
 * Props:
 * - None.
 *
 * @returns A set of paragraphs with the message for users who haven't bought the course.
 */

function TextsCantCommenHasntBuy({}: Props) {
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
                Para poder comentar este curso, necesitas{" "}
                <span
                    className={["span-compl-color", "text-bold-italic"].join(
                        " "
                    )}
                >
                    comprarlo
                </span>
                .
            </p>
            <p>
                Es por seguridad de todos. Para mantener el orden en los
                comentarios.
            </p>
            <p>¡Espero compres el curso y te guste!</p>
        </>
    );
}

export default TextsCantCommenHasntBuy;
