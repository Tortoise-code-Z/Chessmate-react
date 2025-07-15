import { Opinion } from "../../types/types";
import EmblaCarousel from "../EmblaCarousel";
import OpinionsContainer from "./OpinionsContainer";

type Props = {};

const opinions: Opinion[] = [];

function UsersOpinionSection({}: Props) {
    return (
        <section>
            <h2>
                <span>
                    Lo que dicen <span>nuestros alumnos</span>
                </span>
            </h2>
            <EmblaCarousel
                slides={opinions}
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
