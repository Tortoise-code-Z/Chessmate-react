import { Dispatch, SetStateAction } from "react";
import styles from "./ExplanationTheme.module.css";
import Button from "../../Button";
import { DefualtCourse } from "../../../types/types";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { PROFESSOR_IMAGE } from "../../../consts/images";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import WritteMachine from "../../WritteMachine";

type Props = {
    setIndex: Dispatch<React.SetStateAction<number>>;
    index: number;
    data: DefualtCourse;
    setImageSliderLoading: Dispatch<SetStateAction<boolean>>;
};

function ExplanationTheme({
    data,
    setIndex,
    index,
    setImageSliderLoading,
}: Props) {
    const { user } = useUserAuthStore();

    return (
        <div className={[styles.explanationTheme].join(" ")}>
            <div className={[styles.courseData].join(" ")}>
                <div>
                    <h2>{data.title}</h2>
                    <h3>{data.content.themes[index].title}</h3>
                    <WritteMachine
                        data={data.content.themes[index].description}
                        time={30}
                    />
                </div>
                <div>
                    <Button
                        disabled={index === 0}
                        onClick={() => {
                            setImageSliderLoading(true);
                            setIndex(index - 1);
                        }}
                        variant="Secondary"
                    >
                        <FaChevronLeft />
                        Anterior
                    </Button>
                    <Button
                        disabled={index === data.content.themes.length - 1}
                        variant="Complementary"
                        onClick={() => {
                            setImageSliderLoading(true);
                            setIndex(index + 1);
                        }}
                    >
                        Siguiente
                        <FaChevronRight />
                    </Button>
                    <Button
                        variant="Terciary"
                        disabled={data.content.themes[index].completed}
                        // onClick={() => setIndex(index + 1)} <-- Con mutacion
                    >
                        Completar
                    </Button>
                </div>
            </div>
            <div className={[styles.professorContainer].join(" ")}>
                <figure>
                    <img
                        src={PROFESSOR_IMAGE.image}
                        alt={PROFESSOR_IMAGE.alt}
                        title={PROFESSOR_IMAGE.alt}
                        width={PROFESSOR_IMAGE.width}
                        height={PROFESSOR_IMAGE.height}
                    />
                </figure>
                <p>
                    Me alegro de verte,{" "}
                    <span className={["span-pr-color"].join(" ")}>
                        {user?.username}
                    </span>
                    . Comencemos con la clase.
                </p>
            </div>
        </div>
    );
}

export default ExplanationTheme;
