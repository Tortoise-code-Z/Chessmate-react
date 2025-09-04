import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";

type Props<T> = {
    data: T[] | undefined;
    conditions: boolean[] | undefined;
    noCriticalConditions?: boolean[] | undefined;
    children: (
        item: T,
        i: number,
        canRendered: boolean | undefined,
        empty?: boolean
    ) => ReactNode;
    emptyNode?: ReactNode;
    state?: {
        setWarningState: Dispatch<SetStateAction<string | null>>;
        warningState: string | null;
    };
    msg?: string;
    msgEmpty?: string;
};

function SecurityRendering<T>({
    data,
    conditions,
    children,
    msg = "Algún contenido puede estar incompleto. Estamos trabajando en ello para solucionarlo cuanto antes.",
    emptyNode,
    msgEmpty,
    state,
    noCriticalConditions,
}: Props<T>) {
    useEffect(() => {
        if (!state) return;

        if (
            msgEmpty &&
            conditions?.every((c) => !c) &&
            conditions?.length > 0
        ) {
            return state.setWarningState(msgEmpty);
        } else if (
            conditions?.some((c) => !c) ||
            noCriticalConditions?.some((c) => !c)
        ) {
            return state.setWarningState(msg);
        } else {
            return state.setWarningState(null);
        }
    }, [data, conditions, msg, state]);

    if ((!data || data?.length === 0) && !state?.warningState)
        return <>{emptyNode}</>;

    return (
        <>
            {data?.map((d, i) => {
                return children(d, i, conditions?.[i]);
            })}
        </>
    );
}

export default SecurityRendering;
