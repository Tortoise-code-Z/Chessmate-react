import styles from "./Navbar.module.css";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import { LOGO_IMAGE } from "../../../../consts/images";
import { Dispatch, SetStateAction } from "react";
import UserLoggedIn from "./UserLoggedIn";
import FigureImage from "../../../../components/FigureImage";
import UserSesionActions from "./UserSesionActions";
import NavbarLinkList from "./NavbarLinkList";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleSignOut: () => void;
};

/**
 * Navbar - React component that renders the main navigation bar of the application.
 *
 * Features:
 * - Displays the platform logo using `FigureImage`.
 * - Shows navigation links via `NavbarLinkList`.
 * - Conditionally renders user-specific actions:
 *   - `UserLoggedIn` when a user is authenticated.
 *   - `UserSesionActions` when no user is logged in.
 * - Integrates hamburger menu toggle (`setIsOpen`) and sign-out functionality (`handleSignOut`) for user interactions.
 * - Styled using CSS classes for layout and responsive design.
 *
 * Props:
 * - `setIsOpen`: Function to toggle the hamburger menu visibility.
 * - `handleSignOut`: Function to sign out the user.
 *
 * @returns JSX.Element: A responsive and dynamic navigation bar with logo, links, and user actions.
 */

function Navbar({ setIsOpen, handleSignOut }: Props) {
    const { user } = useUserAuthStore();

    return (
        <nav className={styles.navbar}>
            <div className={styles.linksContainer}>
                <FigureImage
                    src={LOGO_IMAGE.image}
                    alt={LOGO_IMAGE.alt}
                    title={LOGO_IMAGE.alt}
                    width={LOGO_IMAGE.width}
                    height={LOGO_IMAGE.height}
                    classNames={[styles.logo]}
                />
                <NavbarLinkList />
            </div>
            {user ? (
                <UserLoggedIn
                    setIsOpen={setIsOpen}
                    handleSignOut={handleSignOut}
                />
            ) : (
                <UserSesionActions setIsOpen={setIsOpen} />
            )}
        </nav>
    );
}

export default Navbar;
