import { useEffect, useState } from "react";
import { asString } from "../../utils/general";
import { DESCRIPTION_DEFAULT_MSG } from "../../consts/general";

type Props = {
    data: string | undefined;
    time: number;
    classNames?: string[];
};

/**
 * Component that simulates a typewriter effect by progressively displaying text.
 *
 * - `data` is the string to be "typed".
 * - `time` sets the interval (ms) between each character.
 * - `classNames` allows passing custom CSS classes.
 *
 * @param data - The text to display with a typewriter animation.
 * @param time - Delay in milliseconds between each character.
 * @param classNames - Optional array of CSS class names to apply.
 * @returns A paragraph element showing the animated text.
 */

function WritteMachine({ data, time, classNames = [] }: Props) {
    const [dataToWritte, setDataToWritte] = useState<string>("");

    const safeData = asString(data) || DESCRIPTION_DEFAULT_MSG;

    useEffect(() => {
        setDataToWritte("");
        let timeoutId: ReturnType<typeof setTimeout>;

        const writeNext = (index: number) => {
            setDataToWritte((prev) => prev + safeData[index]);
            if (index < safeData.length - 1) {
                timeoutId = setTimeout(() => writeNext(index + 1), time);
            }
        };

        writeNext(0);

        return () => clearTimeout(timeoutId);
    }, [data]);

    return <p className={classNames.join(" ")}>{dataToWritte}</p>;
}

export default WritteMachine;
