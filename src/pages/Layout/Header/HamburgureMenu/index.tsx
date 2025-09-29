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
 * HamburguerMenu - React component that renders the full hamburger menu overlay.
 *
 * Features:
 * - Wraps the menu in `AnimatedInView` for sliding entrance animation from the left.
 * - Includes a close button (`FaXmark`) using the reusable `Button` component.
 * - Displays navigation links via `HamburguerMenuLinkList`.
 * - Calls `setIsOpen(false)` to close the menu when the close button is clicked.
 * - Integrates sign-out functionality through `handleSignOut`.
 *
 * Props:
 * - `handleSignOut`: Function to sign out the user.
 * - `setIsOpen`: Function to toggle the hamburger menu visibility.
 *
 * @returns JSX.Element: A styled and animated hamburger menu overlay with navigation links and close functionality.
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
