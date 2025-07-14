import { Opinion } from "../../types/types";
import EmblaCarousel from "../EmblaCarousel";
import OpinionsContainer from "../OpinionsContainer";

type Props = {};

const opinions: Opinion[] = [
    {
        id: 1,
        user: {
            userID: 1,
            username: "marcelo_chess",
            elo: 1420,
            title: null,
        },
        text: "La plataforma es muy intuitiva y fácil de usar.",
    },
    {
        id: 2,
        user: {
            userID: 2,
            username: "anna_wgm",
            elo: 1580,
            title: "GM",
        },
        text: "Excelente contenido y seguimiento de progreso.",
    },
];

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
