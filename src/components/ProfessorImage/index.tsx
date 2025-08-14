import { PROFESSOR_IMAGE } from "../../consts/images";

type Props = {};

function ProfessorImage({}: Props) {
    return (
        <figure>
            <img
                src={PROFESSOR_IMAGE.image}
                alt={PROFESSOR_IMAGE.alt}
                title={PROFESSOR_IMAGE.alt}
                width={PROFESSOR_IMAGE.width}
                height={PROFESSOR_IMAGE.height}
            />
        </figure>
    );
}

export default ProfessorImage;
