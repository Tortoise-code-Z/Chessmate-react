import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import OpinionsCarrousel from "./OpinionsCarrousel";
import styles from "./UsersOpinionSection.module.css";

type Props = {};

function UsersOpinionSection({}: Props) {
    return (
        <section className={styles.usersOpinionSection}>
            <LightComponent top={25} right={35} />

            <TitleHx level={2}>
                Lo que dicen
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    nuestros alumnos
                </span>
            </TitleHx>

            <OpinionsCarrousel />
        </section>
    );
}

export default UsersOpinionSection;
