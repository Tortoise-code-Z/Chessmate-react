import Button from "../../../../components/Button";
import { FaBars } from "react-icons/fa6";
import styles from "./HamburguerMenuButton.module.css";

type Props = {
    onClick: () => void;
};

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
