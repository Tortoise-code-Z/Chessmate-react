import { PiSignInBold } from "react-icons/pi";
import Button from "../../Button";
import styles from "./ProfessorButtons.module.css";
import { useProfessorMsgStore } from "../../../hooks/useProfessorMsgStore";
import { useNavigate } from "react-router-dom";
import { PATHS } from "../../../consts/paths";
import { useFirstLogin } from "../../../hooks/useFirstLogin";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { FaChessPawn } from "react-icons/fa";

type Props = {};

/**
 * Component that renders action buttons for the professor message overlay
 * depending on the current state.
 *
 * - Uses `useProfessorMsgStore` to determine which buttons to display.
 * - Shows login, register, and close buttons if the user cannot buy or comment due to no session.
 * - Shows a close button if the user hasn't purchased the course but tried to comment.
 * - Shows a "Comenzar" button on first login, triggering the first login mutation.
 *
 * Props:
 * - None.
 *
 * @returns A container with the appropriate action buttons for the professor overlay.
 */

function ProfessorButtons({}: Props) {
    const { setState, value } = useProfessorMsgStore();
    const navigate = useNavigate();
    const { mutate } = useFirstLogin();
    const { user } = useUserAuthStore();

    return (
        <div className={styles.actions}>
            {(value === "cantBuySesion" || value === "cantCommentSesion") && (
                <>
                    <Button
                        variant="Complementary"
                        onClick={() => {
                            setState(false);
                            navigate(`/${PATHS.login}`);
                        }}
                    >
                        Iniciar sesión
                    </Button>
                    <Button
                        onClick={() => {
                            setState(false);
                            navigate(`/${PATHS.register}`);
                        }}
                    >
                        <PiSignInBold />
                        Registrarme
                    </Button>
                    <Button variant="Secondary" onClick={() => setState(false)}>
                        Cerrar y volver
                    </Button>
                </>
            )}

            {(value === "cantCommentHasntBuyCourse" || value === "noPrice") && (
                <Button onClick={() => setState(false)}>Cerrar y volver</Button>
            )}

            {value === "firstLogin" && (
                <Button
                    onClick={() => {
                        if (user) mutate(user.userID);
                        setState(false);
                    }}
                >
                    <FaChessPawn />
                    Comenzar
                </Button>
            )}
        </div>
    );
}

export default ProfessorButtons;
