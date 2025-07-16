import { JSON_URL } from "../../consts/url";
import { Opinion } from "../../types/types";
import useUsersOpinions from "../../hooks/useUsersOpinions";
import DataStateWrapper from "../DataStateWrapperProps";
import EmblaCarousel from "../EmblaCarousel";
import LightComponent from "../LightComponent";
import OpinionsContainer from "./OpinionsContainer";
import styles from "./UsersOpinionSection.module.css";

type Props = {};

function UsersOpinionSection({}: Props) {
    const { data, isLoading, error } = useUsersOpinions(JSON_URL);

    return (
        <section className={[styles.usersOpinionSection].join(" ")}>
            <LightComponent top={25} right={35} />

            <h2>
                Lo que dicen
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    nuestros alumnos
                </span>
            </h2>
            <DataStateWrapper
                isLoading={isLoading}
                error={error}
                errorMsg="No se ha podido recuperar las opiniones."
            >
                <EmblaCarousel
                    slides={data ?? ([] as Opinion[])}
                    options={{ loop: true }}
                    Component={OpinionsContainer}
                    arrows={false}
                    playButton={false}
                    playInit={true}
                    fitHeight={true}
                />
            </DataStateWrapper>
        </section>
    );
}

export default UsersOpinionSection;
