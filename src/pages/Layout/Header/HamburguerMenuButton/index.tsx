import Button from "../../../../components/Button";
import { FaBars } from "react-icons/fa6";
import styles from "./HamburguerMenuButton.module.css";

type Props = {
    onClick: () => void;
};

/**
 * HamburguerMenuButton component that renders a button to toggle the hamburger menu.
 *
 * Features:
 * - `Button`: Styled button with secondary variant.
 * - Displays `FaBars` icon indicating a menu toggle.
 * - Calls the provided `onClick` handler when clicked.
 *
 * Props:
 * - `onClick` (function): Function to be executed when the button is clicked.
 *
 * @returns JSX element rendering a styled hamburger menu toggle button.
 */

function HamburguerMenuButton({ onClick }: Props) {
    return (
        <Button
            classNames={[styles.hamburguerMenuButton]}
            onClick={onClick}
            variant="Secondary"
        >
            <FaBars />
        </Button>
    );
}

export default HamburguerMenuButton;
