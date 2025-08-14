import { FaChessPawn } from "react-icons/fa";
import styles from "./WelcomeScreen.module.css";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import Button from "../../../components/Button";
import { useEffect } from "react";
import ProfessorImage from "../../../components/ProfessorImage";
import ProfessorMsg from "./ProfessorMsg";

type Props = {
    onClick: () => void;
};

function WelcomeScreen({ onClick }: Props) {
    const { user } = useUserAuthStore();

    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return (
        <div className={styles.welcomeScreen}>
            <div className={styles.professorContainer}>
                <ProfessorImage />
            </div>
            <div className={styles.professorMsg}>
                <ProfessorMsg username={user?.username ?? ""} />
                <Button onClick={onClick}>
                    <FaChessPawn />
                    Comenzar
                </Button>
            </div>
        </div>
    );
}

export default WelcomeScreen;
