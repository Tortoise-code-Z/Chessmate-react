import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import OpinionsCarrousel from "./OpinionsCarrousel";
import styles from "./UsersOpinionSection.module.css";

type Props = {};

/**
 * UsersOpinionSection component that displays testimonials from students.
 *
 * Features:
 * - Light decorative component positioned top-right.
 * - `TitleHx`: Displays the section title "Lo que dicen nuestros alumnos" with styled span.
 * - `OpinionsCarrousel`: Renders a carousel of student opinions or testimonials.
 *
 * @returns JSX element rendering the user opinions section with decorative styling and carousel.
 */

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
