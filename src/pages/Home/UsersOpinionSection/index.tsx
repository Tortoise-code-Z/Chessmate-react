import { AnimatedInView } from "../../../components/AnimatedInView";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import OpinionsCarrousel from "./OpinionsCarrousel";
import styles from "./UsersOpinionSection.module.css";

type Props = {};

/**
 * UsersOpinionSection - React component that displays student testimonials
 * in a dedicated section on the homepage.
 *
 * Features:
 * - Wraps content in `AnimatedInView` for smooth entrance animations.
 * - Adds decorative visual effects using `LightComponent`.
 * - Shows a section title using `TitleHx` with highlighted spans.
 * - Renders student opinions through the `OpinionsCarrousel` component.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A section featuring student testimonials with animated and styled presentation.
 */

function UsersOpinionSection({}: Props) {
    return (
        <AnimatedInView>
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
        </AnimatedInView>
    );
}

export default UsersOpinionSection;
