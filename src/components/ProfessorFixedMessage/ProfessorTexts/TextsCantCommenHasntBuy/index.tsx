type Props = {};

/**
 * Component displaying a message when a user tries to comment without purchasing the course.
 *
 * - Informs the user that they need to purchase the course before commenting.
 * - Explains the policy is for security and to maintain order in comments.
 * - Encourages the user to purchase the course and enjoy it.
 *
 * Props:
 * - None.
 *
 * @returns A set of paragraphs explaining why commenting requires course purchase.
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
