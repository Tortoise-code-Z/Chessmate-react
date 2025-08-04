import DataStateWrapper from "../../../components/DataStateWrapperProps";
import EmblaCarousel from "../../../components/EmblaCarousel";
import LightComponent from "../../../components/LightComponent";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import useUsersOpinions from "../../../hooks/useUsersOpinions";
import { Opinion } from "../../../types/types";
import OpinionsContainer from "./OpinionsContainer";
import styles from "./UsersOpinionSection.module.css";

type Props = {};

function UsersOpinionSection({}: Props) {
    const { data, isLoading, error } = useUsersOpinions(DATABASE_KEY);

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
