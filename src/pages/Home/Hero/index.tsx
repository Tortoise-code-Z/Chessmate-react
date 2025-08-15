import styles from "./Hero.module.css";

type Props = {};

function Hero({}: Props) {
    return (
        <div className={styles.hero}>
            <h1>
                Chess<span className="span-pr-color">mate</span>
            </h1>
            <p className={styles.subtitle}>
                Tu sitio web para aprender ajedrez.
            </p>
        </div>
    );
}

export default Hero;
