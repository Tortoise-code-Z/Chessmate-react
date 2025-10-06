import { PROFESSOR_IMAGE } from "../../consts/images";
import styles from "./ProfessorFixedMessage.module.css";
import { useEffect } from "react";
import FigureImage from "../FigureImage";
import ProfessorTexts from "./ProfessorTexts";
import ProfessorButtons from "./ProfessorButtons";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { AnimatedInView } from "../AnimatedInView";
import { useLocation } from "react-router-dom";

type Props = {
    userCondition?: boolean;
};

/**
 * Component to display a fixed professor message overlay.
 *
 * - Shows an overlay with a professor image, text, and action buttons.
 * - Can be triggered based on user state (e.g., first login) via `userCondition`.
 * - Disables page scrolling while the overlay is visible.
 * - Uses `AnimatedInView` to animate the overlay appearance from the right.
 * - Integrates `ProfessorTexts` and `ProfessorButtons` for content and actions.
 *
 * Props:
 * - `userCondition` → Optional. Determines if the message should show based on user state (default: `false`).
 *
 * @returns A fixed, animated professor message overlay when conditions are met.
 */

function ProfessorFixedMessage({ userCondition = false }: Props) {
    const { user } = useUserAuthStore();
    const { setState, state, setValue, path, setPath } = useProfessorMsgStore();
    const location = useLocation();

    useEffect(() => {
        if (user?.firstLogin && userCondition) {
            setPath(location.pathname);
            setValue("firstLogin");
            setState(user.firstLogin);
        }
    }, [user?.firstLogin]);

    useEffect(() => {
        if (state) {
            document.body.style.overflow = "hidden";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [state]);

    return (
        <>
            {state && path === location.pathname ? (
                <AnimatedInView config={{ duration: 0.2, direction: "right" }}>
                    <div className={styles.professorFixedMessage}>
                        <div className={styles.imageContain}>
                            <FigureImage
                                src={PROFESSOR_IMAGE.image}
                                title={PROFESSOR_IMAGE.alt}
                                alt={PROFESSOR_IMAGE.alt}
                                width={PROFESSOR_IMAGE.width}
                                height={PROFESSOR_IMAGE.height}
                            />
                        </div>
                        <div className={styles.textActions}>
                            <ProfessorTexts />
                            <ProfessorButtons />
                        </div>
                    </div>
                </AnimatedInView>
            ) : null}
        </>
    );
}

export default ProfessorFixedMessage;
