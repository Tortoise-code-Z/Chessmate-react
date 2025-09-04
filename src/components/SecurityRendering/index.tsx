import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

type Props<T> = {
    data: T[] | undefined;
    conditions: boolean[] | undefined;
    children: (
        item: T,
        i: number,
        canRendered: boolean | undefined,
        empty?: boolean
    ) => ReactNode;
    emptyNode?: ReactNode;
    setWarningState?: Dispatch<SetStateAction<string | null>>;
    msg?: string;
};

function SecurityRendering<T>({
    data,
    conditions,
    children,
    setWarningState,
    msg = "Algún contenido puede estar incompleto. Estamos trabajando en ello.",
    emptyNode,
}: Props<T>) {
    useEffect(() => {
        if (!setWarningState) return;

        if (conditions?.some((c) => !c)) {
            setWarningState(msg);
        } else {
            setWarningState(null);
        }
    }, [conditions, msg, setWarningState]);

    if (conditions?.every((c) => !c) || !conditions) return <>{emptyNode}</>;

    return (
        <>
            {data?.map((d, i) => {
                return children(d, i, conditions?.[i]);
            })}
        </>
    );
}

export default SecurityRendering;
