import { AnimatedInView } from "../../../components/AnimatedInView";
import TitleHx from "../../../components/TitleHx";
import styles from "./Hero.module.css";

type Props = {};

/**
 * Hero component that serves as the main introductory section of the homepage.
 *
 * Features:
 * - `TitleHx`: Displays the main title "Chessmate" with styled span.
 * - Subtitle paragraph describing the website as a platform to learn chess.
 *
 * @returns JSX element rendering the hero section of the homepage.
 */

function Hero({}: Props) {
    return (
        <div className={styles.hero}>
            <AnimatedInView>
                <div className={styles.titleContainer}>
                    <TitleHx>
                        Chess<span className="span-pr-color">mate</span>
                    </TitleHx>
                    <p className={styles.subtitle}>
                        Tu sitio web para aprender ajedrez.
                    </p>
                </div>
            </AnimatedInView>
        </div>
    );
}

export default Hero;
