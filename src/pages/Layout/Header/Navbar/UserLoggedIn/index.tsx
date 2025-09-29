import { FaSignOutAlt } from "react-icons/fa";
import Button from "../../../../../components/Button";
import { AVATAR_DEFAULT_IMAGE } from "../../../../../consts/images";
import styles from "./UserLoggedIn.module.css";
import { useUserAuthStore } from "../../../../../hooks/UseUserAuthStore";
import FigureImage from "../../../../../components/FigureImage";
import HamburguerMenuButton from "../../HamburguerMenuButton";
import { Dispatch, SetStateAction } from "react";
import { asString } from "../../../../../utils/general";
import { USER_DEFAULT_MSG } from "../../../../../consts/general";

type Props = {
    handleSignOut: () => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * UserLoggedIn - React component that displays user information and actions
 * when a user is authenticated.
 *
 * Features:
 * - Shows the user's avatar and username, with fallback defaults if missing.
 * - Provides a sign-out button (`Cerrar sesión`) with a red variant and icon (`FaSignOutAlt`).
 * - Includes a `HamburguerMenuButton` to toggle the hamburger menu visibility.
 * - Uses `useUserAuthStore` to retrieve the current user's information.
 * - Handles safe rendering of strings using `asString` utility.
 *
 * Props:
 * - `handleSignOut`: Function to sign out the authenticated user.
 * - `setIsOpen`: Function to toggle the hamburger menu visibility.
 *
 * @returns JSX.Element: A user options panel with avatar, username, sign-out button, and hamburger menu toggle.
 */

function UserLoggedIn({ handleSignOut, setIsOpen }: Props) {
    const { user } = useUserAuthStore();

    return (
        <div className={styles.userOptions}>
            <div className={styles.userData}>
                <FigureImage
                    src={AVATAR_DEFAULT_IMAGE.image}
                    alt={asString(user?.username)}
                    title={asString(user?.username)}
                    width={AVATAR_DEFAULT_IMAGE.width}
                    height={AVATAR_DEFAULT_IMAGE.height}
                    classNames={[styles.avatarImage]}
                />

                <p className={styles.username}>
                    {asString(user?.username) || USER_DEFAULT_MSG}
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
