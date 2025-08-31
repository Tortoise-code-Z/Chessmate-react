import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

type Props<T> = {
    data: T[] | undefined;
    conditions: boolean[] | undefined;
    children: (
        item: T,
        i: number,
        canRendered: boolean | undefined
    ) => ReactNode;
    setWarningState: Dispatch<SetStateAction<boolean>>;
};

function SecurityRendering<T>({
    data,
    conditions,
    children,
    setWarningState,
}: Props<T>) {
    useEffect(() => {
        if (conditions) setWarningState(conditions.some((c) => c === false));
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
