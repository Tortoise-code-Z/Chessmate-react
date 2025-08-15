import { useEffect, useState } from "react";

type Props = {
    data: string;
    time: number;
    classNames?: string[];
};

function WritteMachine({ data, time, classNames = [] }: Props) {
    const [dataToWritte, setDataToWritte] = useState<string>("");

    useEffect(() => {
        setDataToWritte(""); // Reiniciar texto
        let timeoutId: ReturnType<typeof setTimeout>;

        const writeNext = (index: number) => {
            setDataToWritte((prev) => prev + data[index]);
            if (index < data.length - 1) {
                timeoutId = setTimeout(() => writeNext(index + 1), time);
            }
        };

        writeNext(0); // ✅ Empezar correctamente desde la primera letra

        return () => clearTimeout(timeoutId); // Limpiar en desmontaje

        return () => clearTimeout(timeoutId);
    }, [data]);

    return <p className={classNames.join(" ")}>{dataToWritte}</p>;
}

export default WritteMachine;
