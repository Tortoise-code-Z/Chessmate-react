import { PROFESSOR_IMAGE } from "../../consts/images";
import styles from "./ProfessorFixedMessage.module.css";
import { useEffect } from "react";
import FigureImage from "../FigureImage";
import ProfessorTexts from "./ProfessorTexts";
import ProfessorButtons from "./ProfessorButtons";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";

type Props = {
    userCondition?: boolean;
};

function ProfessorFixedMessage({ userCondition = false }: Props) {
    const { user } = useUserAuthStore();
    const { setState, state, setValue } = useProfessorMsgStore();

    useEffect(() => {
        if (user?.firstLogin && userCondition) {
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
            {state ? (
                <>
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
                </>
            ) : null}
        </>
    );
}

export default ProfessorFixedMessage;
