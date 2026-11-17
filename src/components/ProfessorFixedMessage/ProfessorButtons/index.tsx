import { useTranslation } from "react-i18next";
import { PiSignInBold } from "react-icons/pi";
import Button from "../../Button";
import styles from "./ProfessorButtons.module.css";
import { useProfessorMsgStore } from "../../../hooks/useProfessorMsgStore";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../consts/paths";
import { useFirstLogin } from "../../../hooks/useFirstLogin";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { FaChessPawn } from "react-icons/fa";

/**
 * Component rendering action buttons for the professor message overlay.
 *
 * - Uses `useProfessorMsgStore` to determine which buttons to display based on the current `value`.
 * - Handles navigation to login or registration pages for users who need to sign in.
 * - Provides a "Cerrar y volver" button to close the overlay for multiple cases.
 * - For first-time users (`firstLogin`), triggers the `useFirstLogin` mutation and closes the overlay.
 * - Uses icons (`PiSignInBold`, `FaChessPawn`) and `Button` components for actions.
 * - Styles are applied from `ProfessorButtons.module.css`.
 *
 * Props:
 * - None.
 *
 * @returns A set of context-sensitive action buttons for the professor overlay.
 */

function ProfessorButtons() {
    const { setState, value } = useProfessorMsgStore();
    const navigate = useNavigate();
    const { mutate } = useFirstLogin();
    const { user } = useUserAuthStore();
    const { t } = useTranslation();

    return (
        <div className={styles.actions}>
            {(value === "cantBuySesion" || value === "cantCommentSesion") && (
                <>
                    <Button
                        variant="Complementary"
                        onClick={() => {
                            setState(false);
                            navigate(PATHS.login);
                        }}
                    >
                        {t("session.login")}
                    </Button>
                    <Button
                        onClick={() => {
                            setState(false);
                            navigate(PATHS.register);
                        }}
                    >
                        <PiSignInBold />
                        {t("session.register")}
                    </Button>
                    <Button variant="Secondary" onClick={() => setState(false)}>
                        {t("professor:buttons.close")}
                    </Button>
                </>
            )}

            {(value === "cantCommentHasntBuyCourse" ||
                value === "noPrice" ||
                value === "noID" ||
                value === "isObtained") && (
                <Button onClick={() => setState(false)}>
                    {t("professor:buttons.close")}
                </Button>
            )}

            {value === "firstLogin" && (
                <Button
                    onClick={() => {
                        if (user) mutate(user.userID);
                        setState(false);
                    }}
                >
                    <FaChessPawn />
                    {t("professor:buttons.start")}
                </Button>
            )}
        </div>
    );
}

export default ProfessorButtons;
