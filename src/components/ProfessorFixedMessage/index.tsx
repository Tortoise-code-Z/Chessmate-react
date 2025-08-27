import { PROFESSOR_IMAGE } from "../../consts/images";
import styles from "./ProfessorFixedMessage.module.css";
import { useEffect } from "react";
import FigureImage from "../FigureImage";
import ProfessorTexts from "./ProfessorTexts";
import ProfessorButtons from "./ProfessorButtons";

type Props = {};

function ProfessorFixedMessage({}: Props) {
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
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
    );
}

export default ProfessorFixedMessage;
