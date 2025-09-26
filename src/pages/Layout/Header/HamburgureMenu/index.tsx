import styles from "./HamburguerMenu.module.css";
import Button from "../../../../components/Button";
import { FaXmark } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";
import HamburguerMenuLinkList from "./HamburguerMenuLinkList";
import { AnimatedInView } from "../../../../components/AnimatedInView";

type Props = {
    handleSignOut: () => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

/**
 * HamburguerMenu component that renders the full hamburger menu for mobile navigation.
 *
 * Features:
 * - `Button` with `FaXmark` icon to close the menu.
 * - `HamburguerMenuLinkList`: Displays the list of navigation links inside the menu.
 * - Calls `handleSignOut` for sign-out actions and toggles menu visibility via `setIsOpen`.
 *
 * Props:
 * - `handleSignOut` (function): Function to execute user sign-out.
 * - `setIsOpen` (Dispatch<SetStateAction<boolean>>): Function to toggle the menu open/close state.
 *
 * @returns JSX element rendering the hamburger menu with close button and navigation links.
 */

function HamburguerMenu({ handleSignOut, setIsOpen }: Props) {
    return (
        <header className={styles.container}>
            <AnimatedInView config={{ direction: "left", duration: 0.3 }}>
                <nav className={styles.hamburguerMenu}>
                    <Button
                        classNames={[styles.close]}
                        onClick={() => setIsOpen(false)}
                        variant="Secondary"
                    >
                        <FaXmark />
                    </Button>
                    <HamburguerMenuLinkList
                        handleSignOut={handleSignOut}
                        setIsOpen={setIsOpen}
                    />
                </nav>
            </AnimatedInView>
        </header>
    );
}

export default HamburguerMenu;
