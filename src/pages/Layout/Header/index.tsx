import Navbar from "./Navbar";
import styles from "./Header.module.css";
import HamburguerMenu from "./HamburgureMenu";
import { useState } from "react";
import { useSignout } from "../../../hooks/useSignout";

type Props = {};

/**
 * Header component that renders the site header with navigation and hamburger menu.
 *
 * Features:
 * - `Navbar`: Main navigation bar with sign-out functionality.
 * - `HamburguerMenu`: Responsive menu that appears when `isOpen` is true, allowing navigation and sign-out.
 * - Handles sign-out action using `useSignout` hook.
 *
 * State:
 * - `isOpen` (boolean): Determines if the hamburger menu is open or closed.
 *
 * Hooks:
 * - `useState`: Manages the `isOpen` state for the hamburger menu.
 * - `useSignout`: Provides the sign-out mutation function.
 *
 * @returns JSX element rendering the header with navigation and conditional hamburger menu.
 */

function Header({}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mutate } = useSignout();
    const handleSignOut = () => mutate();

    const className = styles.header;
    return (
        <header className={className}>
            {isOpen && (
                <HamburguerMenu
                    setIsOpen={setIsOpen}
                    handleSignOut={handleSignOut}
                />
            )}
            <Navbar setIsOpen={setIsOpen} handleSignOut={handleSignOut} />
        </header>
    );
}

export default Header;
