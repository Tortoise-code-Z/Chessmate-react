import TitleHx from "../../../components/TitleHx";
import styles from "./Hero.module.css";

type Props = {};

function Hero({}: Props) {
    return (
        <div className={styles.hero}>
            <TitleHx>
                Chess<span className="span-pr-color">mate</span>
            </TitleHx>

            <p className={styles.subtitle}>
                Tu sitio web para aprender ajedrez.
            </p>
        </div>
    );
}

export default Hero;
