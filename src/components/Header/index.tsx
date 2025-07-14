import Navbar from "../Navbar";
import styles from "./Header.module.css";

type Props = {};

function Header({}: Props) {
    const className = [styles.header].join(" ");
    return (
        <header className={className}>
            <Navbar />
        </header>
    );
}

export default Header;
