type Props = {};

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
