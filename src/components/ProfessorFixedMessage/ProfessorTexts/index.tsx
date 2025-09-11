import { useProfessorMsgStore } from "../../../hooks/useProfessorMsgStore";
import styles from "./ProfessorTexts.module.css";
import TextIsObtained from "./TextIsObtained";
import TextNoID from "./TextNoID";
import TextNoPrice from "./TextNoPrice";
import TextsCantCommenHasntBuy from "./TextsCantCommenHasntBuy";
import TextsFirstLogin from "./TextsFirstLogin";
import TextsNoSesion from "./TextsNoSesion";
type Props = {};

/**
 * Component that displays different professor messages based on the current state.
 *
 * - Uses `useProfessorMsgStore` to determine which message to show.
 * - Renders `TextsNoSesion` when the user cannot buy or comment due to no session.
 * - Renders `TextsCantCommenHasntBuy` when the user hasn't purchased the course.
 * - Renders `TextsFirstLogin` when the user is logging in for the first time.
 *
 * Props:
 * - None.
 *
 * @returns A container with the appropriate professor message based on state.
 */

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

                {value === "noPrice" && <TextNoPrice />}

                {value === "noID" && <TextNoID />}

                {value === "isObtained" && <TextIsObtained />}
            </div>
        </div>
    );
}

export default ProfessorTexts;
