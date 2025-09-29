import { useEffect, useState } from "react";
import { asString } from "../../utils/general";
import { DESCRIPTION_DEFAULT_MSG } from "../../consts/general";

type Props = {
    data: string | undefined;
    time: number;
    classNames?: string[];
};

/**
 * Displays text with a typewriter effect, revealing one character at a time.
 *
 * - Uses `data` as the source text, falling back to `DESCRIPTION_DEFAULT_MSG` if undefined.
 * - Controls typing speed with the `time` prop (milliseconds per character).
 * - Supports additional CSS classes via `classNames`.
 *
 * Props:
 * - `data` → The string to display with the typewriter effect.
 * - `time` → Delay in milliseconds between each character.
 * - `classNames` → Optional array of CSS class names to apply to the text.
 *
 * @returns A paragraph element showing the animated typing text.
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
