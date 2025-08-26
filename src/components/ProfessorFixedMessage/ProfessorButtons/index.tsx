import { PiSignInBold } from "react-icons/pi";
import Button from "../../Button";
import styles from "./ProfessorButtons.module.css";
import { useProfessorMsgStore } from "../../../hooks/useProfessorMsgStore";
import { useNavigate } from "react-router-dom";
import { paths } from "../../../consts/paths";
import { useFirstLogin } from "../../../hooks/useFirstLogin";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { FaChessPawn } from "react-icons/fa";

type Props = {};

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
                            navigate(`/${paths.login}`);
                        }}
                    >
                        Iniciar sesión
                    </Button>
                    <Button
                        onClick={() => {
                            setState(false);
                            navigate(`/${paths.register}`);
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

            {value === "cantCommentHasntBuyCourse" && (
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
