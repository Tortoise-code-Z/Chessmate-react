import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

type Props<T> = {
    data: T[] | undefined;
    conditions: boolean[] | undefined;
    children: (
        item: T,
        i: number,
        canRendered: boolean | undefined
    ) => ReactNode;
    setWarningState?: Dispatch<SetStateAction<string | null>>;
    msg?: string;
};

function SecurityRendering<T>({
    data,
    conditions,
    children,
    setWarningState,
    msg = "Algún contenido puede estar incompleto. Estamos trabajando en ello.",
}: Props<T>) {
    useEffect(() => {
        if (conditions && setWarningState)
            conditions.some((c) => c === false)
                ? setWarningState(msg)
                : setWarningState(null);
    }, [data]);

    return (
        <>
            {data?.map((d, i) => {
                return children(d, i, conditions?.[i]);
            })}
        </>
    );
}

export default SecurityRendering;
