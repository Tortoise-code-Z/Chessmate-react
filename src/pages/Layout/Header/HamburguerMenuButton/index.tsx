import Button from "../../../../components/Button";
import { FaBars } from "react-icons/fa6";
import styles from "./HamburguerMenuButton.module.css";

type Props = {
    onClick: () => void;
};

/**
 * HamburguerMenuButton - React component that renders a button to toggle the hamburger menu.
 *
 * Features:
 * - Uses a reusable `Button` component with a secondary variant.
 * - Displays the hamburger icon (`FaBars`) inside the button.
 * - Calls the `onClick` handler when pressed to toggle menu visibility.
 *
 * Props:
 * - `onClick`: Function to be executed when the button is clicked.
 *
 * @returns JSX.Element: A styled hamburger menu button with an icon.
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
