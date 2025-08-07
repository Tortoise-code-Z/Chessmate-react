import { Dispatch, SetStateAction } from "react";
import styles from "./ExplanationTheme.module.css";
import { FaChevronRight } from "react-icons/fa6";
import { FaChevronLeft } from "react-icons/fa6";
import { UseCourseApiType } from "../../../../types/types";
import { useUserAuthStore } from "../../../../hooks/UseUserAuthStore";
import WritteMachine from "../../../../components/WritteMachine";
import Button from "../../../../components/Button";
import { PROFESSOR_IMAGE } from "../../../../consts/images";

type Props = {
    setIndex: Dispatch<React.SetStateAction<number>>;
    index: number;
    data: UseCourseApiType;
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
                    <h2>{data.courses.title}</h2>
                    <h3>
                        {
                            data.courses.content.themes.find(
                                (t) => t.id === index
                            )?.title
                        }
                    </h3>
                    <WritteMachine
                        data={
                            data.courses.content.themes.find(
                                (t) => t.id === index
                            )?.description || ""
                        }
                        time={30}
                    />
                </div>
                <div>
                    <Button
                        disabled={index === 1}
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
                        disabled={index === data.courses.content.themes.length}
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
                        disabled={
                            data.userThemeStates.find(
                                (u) => u.themeID === index
                            )?.completed
                        }
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
                    Me alegro de verte de nuevo,{" "}
                    <span
                        className={["span-pr-color", "text-medium"].join(" ")}
                    >
                        {user?.username}.
                    </span>
                </p>
            </div>
        </div>
    );
}

export default ExplanationTheme;
