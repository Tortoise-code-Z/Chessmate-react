import Navbar from "./Navbar";
import styles from "./Header.module.css";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Props = {
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    handleSignOut: () => void;
};

/**
 * Header - React component that renders the application header with a dynamic navbar.
 *
 * Features:
 * - Contains the `Navbar` component with sign-out functionality and hamburger menu toggle.
 * - Hides or shows the header based on scroll direction:
 *   - Scroll down → hides the header.
 *   - Scroll up → shows the header.
 * - Tracks the last scroll position using local state (`lastScrollY`).
 * - Applies conditional CSS classes (`hidden`) for animation and visibility.
 *
 * Props:
 * - `setIsOpen`: Function to toggle the hamburger menu state.
 * - `handleSignOut`: Function to handle user sign-out.
 *
 * @returns JSX.Element: A dynamic header that shows/hides on scroll with the embedded navbar.
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
