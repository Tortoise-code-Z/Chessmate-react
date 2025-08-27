import { useEffect, useState } from "react";

type Props = {
    data: string;
    time: number;
    classNames?: string[];
};

function WritteMachine({ data, time, classNames = [] }: Props) {
    const [dataToWritte, setDataToWritte] = useState<string>("");

    useEffect(() => {
        setDataToWritte("");
        let timeoutId: ReturnType<typeof setTimeout>;

        const writeNext = (index: number) => {
            setDataToWritte((prev) => prev + data[index]);
            if (index < data.length - 1) {
                timeoutId = setTimeout(() => writeNext(index + 1), time);
            }
        };

        writeNext(0);

        return () => clearTimeout(timeoutId);
    }, [data]);

    return <p className={classNames.join(" ")}>{dataToWritte}</p>;
}

export default WritteMachine;
