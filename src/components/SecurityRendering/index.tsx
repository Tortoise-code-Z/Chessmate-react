import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { asArray, isArray } from "../../utils/general";
import { WarningMsgType } from "../../types/types";

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
        setWarningState: Dispatch<SetStateAction<WarningMsgType | null>>;
        warningState: WarningMsgType | null;
    };
    sameState?: boolean;
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
    sameState = false,
}: Props<T>) {
    const safeData = asArray<T>(data) || [];

    const error = sameState
        ? !isArray(data) && conditions?.every((c) => !c)
        : !isArray(data);

    useEffect(() => {
        if (!state) return;

        if (error) {
            if (sameState) {
                if (!state.warningState?.msg) {
                    state.setWarningState({
                        emptyMsg: msgEmpty,
                        msg: undefined,
                    });
                }
            } else {
                state.setWarningState({
                    emptyMsg: msgEmpty,
                    msg: undefined,
                });
            }
        } else if (
            conditions?.some((c) => !c) ||
            noCriticalConditions?.some((c) => !c)
        ) {
            state.setWarningState({
                emptyMsg: undefined,
                msg,
            });
        } else {
            if (!sameState) {
                state.setWarningState({
                    emptyMsg: undefined,
                    msg: undefined,
                });
            }
        }
    }, [
        error,
        sameState,
        state?.warningState?.emptyMsg,
        state?.warningState?.msg,
        safeData,
    ]);

    if (safeData.length === 0 && emptyNode) return <>{emptyNode}</>;

    return <>{safeData.map((item, i) => children(item, i, conditions?.[i]))}</>;
}

export default SecurityRendering;
