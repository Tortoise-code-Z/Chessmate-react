import { AnimatedInView } from "../../../components/AnimatedInView";
import TitleHx from "../../../components/TitleHx";
import styles from "./Hero.module.css";

type Props = {};

/**
 * Hero - React component that renders the hero section of the homepage.
 *
 * Features:
 * - Wraps content in `AnimatedInView` for entrance animations.
 * - Displays the main title with `TitleHx`, highlighting part of the text with a styled span.
 * - Shows a subtitle describing the purpose of the website.
 * - Serves as the introductory section to engage users immediately.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A hero section with title, highlighted branding, and subtitle.
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
