import { Dispatch, ReactNode, SetStateAction, useEffect } from "react";
import { useTranslation } from "react-i18next";
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

type NextWarningParams = {
    prev: WarningMsgType | null;
    error: boolean;
    hasIssues: boolean;
    sameState: boolean;
    warningMsg: string;
    emptyErrorMsg: string;
};

/**
 * Calcula el aviso que corresponde a partir del aviso anterior.
 *
 * Funcion pura (sin React) para poder razonarla y testearla aparte:
 * - `error` → aviso de "no se han podido recuperar los datos". Con
 *   `sameState`, no pisa un aviso `msg` que ya haya puesto otro componente
 *   que comparte el mismo estado.
 * - `hasIssues` → aviso de "contenido incompleto".
 * - Todo correcto → limpia el aviso (salvo con `sameState`, que lo respeta).
 */
const getNextWarning = ({
    prev,
    error,
    hasIssues,
    sameState,
    warningMsg,
    emptyErrorMsg,
}: NextWarningParams): WarningMsgType | null => {
    if (error) {
        if (sameState && prev?.msg) return prev;
        return { emptyMsg: emptyErrorMsg, msg: undefined };
    }

    if (hasIssues) return { emptyMsg: undefined, msg: warningMsg };

    if (sameState) return prev;
    return { emptyMsg: undefined, msg: undefined };
};

/** ¿Muestran `a` y `b` el mismo aviso? (`null` equivale a "sin aviso"). */
const isSameWarning = (
    a: WarningMsgType | null,
    b: WarningMsgType | null
): boolean => a?.emptyMsg === b?.emptyMsg && a?.msg === b?.msg;

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
 * - `msg` → Optional warning message for non-critical conditions (default: translated `common:safeRendering.warning`).
 * - `msgEmpty` → Optional message when `data` is empty (default: translated `common:safeRendering.emptyError`).
 *
 * The warning state is only updated when the computed warning actually changes
 * (stable effect deps + functional update that returns the previous state when
 * equal), so an empty/`undefined` `data` can't trigger an infinite render loop.
 *
 * @returns A fragment containing rendered children or the `emptyNode`.
 */

function SecurityRendering<T>({
    data,
    conditions,
    children,
    msg,
    emptyNode,
    msgEmpty,
    state,
    noCriticalConditions,
    sameState = false,
}: Props<T>) {
    const { t } = useTranslation("common");
    const warningMsg = msg ?? t("safeRendering.warning");
    const emptyErrorMsg = msgEmpty ?? t("safeRendering.emptyError");

    const safeData = asArray<T>(data) || [];

    // Solo valores primitivos: el efecto se ejecuta cuando cambia el
    // diagnostico, no cuando se recrean arrays/objetos en cada render.
    const error = sameState
        ? !isArray(data) && !!conditions?.every((c) => !c)
        : !isArray(data);

    const hasIssues =
        !!conditions?.some((c) => !c) ||
        !!noCriticalConditions?.some((c) => !c);

    const setWarningState = state?.setWarningState;

    useEffect(() => {
        if (!setWarningState) return;

        setWarningState((prev) => {
            const next = getNextWarning({
                prev,
                error,
                hasIssues,
                sameState,
                warningMsg,
                emptyErrorMsg,
            });
            // Devolver `prev` hace que React no vuelva a renderizar.
            return isSameWarning(prev, next) ? prev : next;
        });
    }, [error, hasIssues, sameState, warningMsg, emptyErrorMsg, setWarningState]);

    if (safeData.length === 0 && emptyNode) return <>{emptyNode}</>;

    return <>{safeData.map((item, i) => children(item, i, conditions?.[i]))}</>;
}

export default SecurityRendering;
