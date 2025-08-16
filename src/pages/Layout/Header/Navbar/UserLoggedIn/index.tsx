import { FaSignOutAlt } from "react-icons/fa";
import Button from "../../../../../components/Button";
import { AVATAR_DEFAULT_IMAGE } from "../../../../../consts/images";
import styles from "./UserLoggedIn.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import FigureImage from "../../../../../components/FigureImage";
import HamburguerMenuButton from "../../HamburguerMenuButton";
import { Dispatch, SetStateAction } from "react";

type Props = {
    handleSignOut: () => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function UserLoggedIn({ handleSignOut, setIsOpen }: Props) {
    const { user } = useUserAuthStore();
    return (
        <div className={styles.userOptions}>
            <div className={styles.userData}>
                <FigureImage
                    src={AVATAR_DEFAULT_IMAGE.image}
                    alt={`${user?.username || "Usuario"} Avatar`}
                    title={`${user?.username || "Usuario"} Avatar`}
                    width={AVATAR_DEFAULT_IMAGE.width}
                    height={AVATAR_DEFAULT_IMAGE.height}
                    classNames={[styles.avatarImage]}
                />

                <p className={styles.username}>{user?.username}</p>
            </div>
            <Button
                classNames={[styles.signoutButton]}
                onClick={() => handleSignOut()}
                variant="Red"
            >
                <FaSignOutAlt /> Cerrar sesión
            </Button>
            <HamburguerMenuButton
                onClick={() => {
                    setIsOpen(true);
                }}
            />
        </div>
    );
}

export default UserLoggedIn;
