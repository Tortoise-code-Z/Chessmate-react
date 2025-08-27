import styles from "./HamburguerMenu.module.css";
import Button from "../../../../components/Button";
import { FaXmark } from "react-icons/fa6";
import { Dispatch, SetStateAction } from "react";
import HamburguerMenuLinkList from "./HamburguerMenuLinkList";

type Props = {
    handleSignOut: () => void;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function HamburguerMenu({ handleSignOut, setIsOpen }: Props) {
    return (
        <div className={styles.container}>
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
        </div>
    );
}

export default HamburguerMenu;
