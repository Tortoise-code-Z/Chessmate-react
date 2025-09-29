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
 * Component to display dynamic professor messages based on current state.
 *
 * - Uses `useProfessorMsgStore` to determine which message to render.
 * - Displays one of several message components depending on the `value`:
 *   - `TextsNoSesion` → User cannot buy or comment due to no session.
 *   - `TextsCantCommenHasntBuy` → User hasn't purchased the course.
 *   - `TextsFirstLogin` → User is logging in for the first time.
 *   - `TextNoPrice` → No price is set for the course.
 *   - `TextNoID` → Course ID is missing.
 *   - `TextIsObtained` → Course is already obtained.
 *
 * Props:
 * - None.
 *
 * @returns A container displaying the appropriate professor message based on state.
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
