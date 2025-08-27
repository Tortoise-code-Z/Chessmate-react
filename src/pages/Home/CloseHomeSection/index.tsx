import FigureImage from "../../../components/FigureImage";
import LightComponent from "../../../components/LightComponent";
import TitleHx from "../../../components/TitleHx";
import { LOGO_IMAGE } from "../../../consts/images";
import styles from "./CloseHomeSection.module.css";

type Props = {};

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
