import { useProfessorMsgStore } from "../../../hooks/useProfessorMsgStore";
import styles from "./ProfessorTexts.module.css";
import TextsCantCommenHasntBuy from "./TextsCantCommenHasntBuy";
import TextsFirstLogin from "./TextsFirstLogin";
import TextsNoSesion from "./TextsNoSesion";
type Props = {};

function ProfessorTexts({}: Props) {
    const { value } = useProfessorMsgStore();

    return (
        <div className={styles.dataContainer}>
            <div className={styles.data}>
                {(value === "cantBuySesion" ||
                    value === "cantCommentSesion") && <TextsNoSesion />}
                {value === "cantCommentHasntBuyCourse" && (
                    <TextsCantCommenHasntBuy />
                )}
                {value === "firstLogin" && <TextsFirstLogin />}
            </div>
        </div>
    );
}

export default ProfessorTexts;
