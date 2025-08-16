import Navbar from "./Navbar";
import styles from "./Header.module.css";
import HamburguerMenu from "./HamburgureMenu";
import { useState } from "react";
import { useSignout } from "../../../hooks/useSignout";

type Props = {};

function Header({}: Props) {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mutate } = useSignout();
    const handleSignOut = () => mutate();

    const className = [styles.header].join(" ");
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
