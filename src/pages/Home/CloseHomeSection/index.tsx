import { AnimatedInView } from "../../../components/AnimatedInView";
import FigureImage from "../../../components/FigureImage";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import { LOGO_IMAGE } from "../../../consts/images";
import styles from "./CloseHomeSection.module.css";

type Props = {};

/**
 * CloseHomeSection - React component that renders the closing section of the homepage,
 * thanking users and reinforcing trust in the platform.
 *
 * Features:
 * - Wraps content in `AnimatedInView` for smooth entrance animations.
 * - Displays a styled gratitude message using `TitleHx` with emphasized spans.
 * - Includes decorative `LightComponent` for visual enhancement.
 * - Shows a closing message that highlights the student portal.
 * - Renders the platform logo via `FigureImage` using constants from `LOGO_IMAGE`.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: A closing section with a thank-you message, decorative elements, and logo.
 */

function CloseHomeSection({}: Props) {
    return (
        <AnimatedInView>
            <section className={styles.closeHomeSection}>
                <LightComponent top={35} right={65} />
                <TitleHx level={2}>
                    <span className={"size-80"}>Muchas gracias por</span>
                    <span>
                        <span
                            className={[
                                "span-pr-color",
                                "size-140",
                                "text-regular",
                            ].join(" ")}
                        >
                            confiar{" "}
                        </span>
                        <span className={"size-90"}>en nosotros</span>
                    </span>
                </TitleHx>
                <p>
                    Te esperamos con ilusión en{" "}
                    <span className={"span-pr-color"}>tu portal de alumno</span>
                </p>
                <FigureImage
                    src={LOGO_IMAGE.image}
                    alt={LOGO_IMAGE.alt}
                    title={LOGO_IMAGE.alt}
                    width={LOGO_IMAGE.width}
                    height={LOGO_IMAGE.height}
                />
            </section>
        </AnimatedInView>
    );
}

export default CloseHomeSection;
