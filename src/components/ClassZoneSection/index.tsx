import styles from "./ClassZoneSection.module.css";

type Props = {};

function ClassZoneSection({}: Props) {
    return (
        <section className={[styles.classZoneSection].join(" ")}>
            ClassZoneSection
        </section>
    );
}

export default ClassZoneSection;
