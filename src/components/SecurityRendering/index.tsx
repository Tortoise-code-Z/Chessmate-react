import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { asArray, isArray } from "../../utils/general";

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
    msgEmpty = "No se han podido recuperar los datos.",
    state,
    noCriticalConditions,
}: Props<T>) {
    const safeData = asArray<T>(data) || [];
    const error = !isArray(data);

    useEffect(() => {
        if (!state) return;

        if (error) {
            state.setWarningState(msgEmpty);
        } else if (
            conditions?.some((c) => !c) ||
            noCriticalConditions?.some((c) => !c)
        ) {
            state.setWarningState(msg);
        } else {
            state.setWarningState(null);
        }
    }, [error, conditions, noCriticalConditions, msg, msgEmpty, state]);
    if (safeData.length === 0 && emptyNode) return <>{emptyNode}</>;

    return <>{safeData.map((item, i) => children(item, i, conditions?.[i]))}</>;
}

export default SecurityRendering;
