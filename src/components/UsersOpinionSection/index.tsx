import { JSON_URL } from "../../consts/url";
import useUsersOpinions from "../../hooks/useUsersOpinions";
import { Opinion } from "../../types/types";
import EmblaCarousel from "../EmblaCarousel";
import OpinionsContainer from "./OpinionsContainer";
import styles from "./UsersOpinionSection.module.css";

type Props = {};

// const opinions: Opinion[] = [];

function UsersOpinionSection({}: Props) {
    const { data, isLoading, error } = useUsersOpinions(JSON_URL);

    return (
        <section className={[styles.usersOpinionSection].join(" ")}>
            <h2>
                Lo que dicen
                <span className={["span-pr-color", "upperCase"].join(" ")}>
                    nuestros alumnos
                </span>
            </h2>
            <EmblaCarousel
                slides={data ?? ([] as Opinion[])}
                options={{ loop: true }}
                Component={OpinionsContainer}
                arrows={false}
                playButton={false}
                playInit={true}
                fitHeight={true}
            />
        </section>
    );
}

export default UsersOpinionSection;
