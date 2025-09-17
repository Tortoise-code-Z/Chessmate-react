import { FaSignOutAlt } from "react-icons/fa";
import Button from "../../../../../components/Button";
import { AVATAR_DEFAULT_IMAGE } from "../../../../../consts/images";
import styles from "./UserLoggedIn.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import FigureImage from "../../../../../components/FigureImage";
import HamburguerMenuButton from "../../HamburguerMenuButton";
import { Dispatch, SetStateAction } from "react";
import { asString } from "../../../../../utils/general";

type Props = {
    handleSignOut: () => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * UserLoggedIn component that displays user information and actions for authenticated users.
 *
 * Features:
 * - `FigureImage`: Shows the user's avatar with default fallback and proper sizing.
 * - Displays the username of the authenticated user.
 * - `Button` with `FaSignOutAlt` icon for signing out.
 * - `HamburguerMenuButton` to open the mobile hamburger menu.
 *
 * Hooks:
 * - `useUserAuthStore`: Retrieves the current authenticated user's information.
 *
 * Props:
 * - `handleSignOut` (function): Function to execute user sign-out.
 * - `setIsOpen` (Dispatch<SetStateAction<boolean>>): Function to open the hamburger menu.
 *
 * @returns JSX element rendering user information, sign-out button, and mobile menu button for authenticated users.
 */

function UserLoggedIn({ handleSignOut, setIsOpen }: Props) {
    const { user } = useUserAuthStore();

    return (
        <div className={styles.userOptions}>
            <div className={styles.userData}>
                <FigureImage
                    src={AVATAR_DEFAULT_IMAGE.image}
                    alt={`${asString(user?.username) || "Usuario"} Avatar`}
                    title={`${asString(user?.username) || "Usuario"} Avatar`}
                    width={AVATAR_DEFAULT_IMAGE.width}
                    height={AVATAR_DEFAULT_IMAGE.height}
                    classNames={[styles.avatarImage]}
                />

                <p className={styles.username}>
                    {asString(user?.username) || "Usuario"}
                </p>
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
