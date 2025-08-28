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
 * Navbar component that renders the main site navigation bar.
 *
 * Features:
 * - `FigureImage`: Displays the site logo with proper sizing and alt/title attributes.
 * - `NavbarLinkList`: Renders the list of navigation links.
 * - Conditional user section:
 *   - `UserLoggedIn`: Shows user options and sign-out if authenticated.
 *   - `UserSesionActions`: Shows login/register actions if unauthenticated.
 *
 * Hooks:
 * - `useUserAuthStore`: Retrieves the current authenticated user's information.
 *
 * Props:
 * - `setIsOpen` (Dispatch<SetStateAction<boolean>>): Function to toggle hamburger menu state for mobile.
 * - `handleSignOut` (function): Function to execute user sign-out.
 *
 * @returns JSX element rendering the navigation bar with logo, links, and user actions.
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
