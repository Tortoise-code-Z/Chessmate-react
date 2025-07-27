import styles from "./Hero.module.css";

type Props = {};

function Hero({}: Props) {
    const className = [styles.hero].join(" ");
    return (
        <div className={className}>
            <h1>
                Chess<span className="span-pr-color">mate</span>
            </h1>
            <p className={[styles.subtitle].join(" ")}>
                Tu sitio web para aprender ajedrez.
            </p>
        </div>
    );
}

export default Hero;
