import LightComponent from "../../../components/LightComponent";
import OpinionsCarrousel from "./OpinionsCarrousel";
import styles from "./UsersOpinionSection.module.css";

type Props = {};

function UsersOpinionSection({}: Props) {
    return (
        <section className={styles.usersOpinionSection}>
            <LightComponent top={25} right={35} />

            <h2>
                Lo que dicen
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    nuestros alumnos
                </span>
            </h2>
            <OpinionsCarrousel />
        </section>
    );
}

export default UsersOpinionSection;
