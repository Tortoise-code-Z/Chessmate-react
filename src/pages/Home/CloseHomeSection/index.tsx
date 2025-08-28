import FigureImage from "../../../components/FigureImage";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import { LOGO_IMAGE } from "../../../consts/images";
import styles from "./CloseHomeSection.module.css";

type Props = {};

/**
 * CloseHomeSection component that serves as the closing section of the homepage.
 *
 * Features:
 * - Light decorative component positioned top-right.
 * - `TitleHx`: Displays a thank-you message with styled text.
 * - Paragraph inviting users to the student portal.
 * - `FigureImage`: Displays the logo image with proper sizing and alt/title attributes.
 *
 * @returns JSX element rendering the closing section of the homepage with message and logo.
 */

function CloseHomeSection({}: Props) {
    return (
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
    );
}

export default CloseHomeSection;
