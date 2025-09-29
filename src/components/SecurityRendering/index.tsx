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

/**
 * Component that safely renders a list of items based on provided conditions.
 *
 * - Converts `data` to a safe array using `asArray`.
 * - Checks `conditions` and `noCriticalConditions` to determine if a warning message should be displayed.
 * - Updates optional `state.warningState` with messages if conditions are not met.
 * - Renders `emptyNode` if `data` is empty.
 * - Calls `children` function for each item in `data`, passing the item, index, condition for rendering, and optional empty flag.
 *
 * Props:
 * - `data` → Array of items to render, can be `undefined`.
 * - `conditions` → Array of booleans to determine if each item can be safely rendered.
 * - `noCriticalConditions` → Optional array of booleans for non-critical conditions.
 * - `children` → Function to render each item: `(item: T, i: number, canRendered: boolean | undefined, empty?: boolean) => ReactNode`.
 * - `emptyNode` → Optional node to render if `data` is empty.
 * - `state` → Optional object containing `warningState` and `setWarningState` to manage messages externally.
 * - `sameState` → Optional boolean to control if warning state should be shared (default: `false`).
 * - `msg` → Optional warning message for non-critical conditions (default provided).
 * - `msgEmpty` → Optional message when `data` is empty (default provided).
 *
 * @returns A fragment containing rendered children or the `emptyNode`.
 */

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
