import { useEffect } from "react";
import styles from "./FeedbackMessage.module.css";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";

type Props = {
    position?: "top" | "bottom";
    time?: number | "infinite";
};

/**
 * Componente de mensaje fijo (feedback) que se muestra de forma condicional según el estado global.
 *
 * - Obtiene el mensaje y su tipo (`success` | `error`) desde `useFeedbackMessageStore`.
 * - Se oculta automáticamente tras un tiempo definido o permanece visible de forma infinita.
 * - Su posición en pantalla puede configurarse en la parte superior o inferior.
 *
 * Props:
 * - `position` → Posición en la pantalla donde se muestra el mensaje (por defecto: `"bottom"`).
 * - `time` → Tiempo en milisegundos antes de ocultar el mensaje. Usa `"infinite"` para no cerrarlo automáticamente (por defecto: `5000`).
 *
 * @returns Mensaje flotante de feedback o `null` si no está activo.
 */

function FeedbackMessage({ position = "bottom", time = 5000 }: Props) {
    const {
        msg,
        type,
        reset,
        setMsg,
        setReset,
        setState,
        setType,
        state,
        path,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if (time !== "infinite") {
            timeout = setTimeout(() => {
                setState(false);
                if (!reset) setReset(true);
                setMsg("");
                setType(null);
            }, time);
        }

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    useEffect(() => {
        if (reset) {
            setPath("");
        } else {
            setReset(true);
        }
    }, [location.pathname]);

    return (
        <>
            {state && path === location.pathname ? (
                <div
                    className={[
                        type === "success"
                            ? styles.successFixedMsg
                            : styles.errorFixedMsg,
                        position === "top" ? styles.msgTop : styles.msgBottom,
                        styles.fixedMsg,
                    ].join(" ")}
                >
                    <span>{msg}</span>
                </div>
            ) : null}
        </>
    );
}

export default FeedbackMessage;
