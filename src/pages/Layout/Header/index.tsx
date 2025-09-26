import Navbar from "./Navbar";
import styles from "./Header.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleSignOut: () => void;
};

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

function Header({ setIsOpen, handleSignOut }: Props) {
    const [hidden, setHidden] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Scroll hacia abajo → ocultar navbar
                setHidden(true);
            } else {
                // Scroll hacia arriba → mostrar navbar
                setHidden(false);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <header
            className={[styles.header, hidden ? styles.hidden : ""].join(" ")}
        >
            <Navbar setIsOpen={setIsOpen} handleSignOut={handleSignOut} />
        </header>
    );
}

export default Header;
