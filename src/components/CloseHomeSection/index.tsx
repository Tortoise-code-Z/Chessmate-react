import { getImage } from "../../utils/images";
import LightComponent from "../LightComponent";
import styles from "./CloseHomeSection.module.css";

type Props = {};

function CloseHomeSection({}: Props) {
    return (
        <section className={[styles.closeHomeSection].join(" ")}>
            <LightComponent top={35} right={65} />

            <h2>
                <span className={["size-80"].join(" ")}>
                    Muchas gracias por
                </span>
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
                    <span className={["size-90"].join(" ")}>en nosotros</span>
                </span>
            </h2>
            <p>
                Te esperamos con ilusión en{" "}
                <span className={["span-pr-color"].join(" ")}>
                    tu portal de alumno
                </span>
            </p>
            <figure>
                <img
                    src={getImage("static-image-logo_500x500_.png", ["static"])}
                    alt="Chessmate"
                />
            </figure>
        </section>
    );
}

export default CloseHomeSection;
