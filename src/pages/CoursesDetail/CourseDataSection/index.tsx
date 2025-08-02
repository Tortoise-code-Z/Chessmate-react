import { useParams } from "react-router-dom";
// import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import Authors from "./Authors";
import styles from "./CourseDataSection.module.css";
import CourseDescription from "./CourseDescription";
import DetailsCourse from "./DetailsCourse";
import GeneralCourseData from "./GeneralCourseData";
import useCourse from "../../../hooks/useCourse";
import { JSON_URL } from "../../../consts/url";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { Course } from "../../../types/types";
import LightComponent from "../../../components/LightComponent";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";

type Props = {};

function CourseDataSection({}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useCourse(
        JSON_URL,
        Number(params.id),
        user?.userID
    );

    return (
        <section className={[styles.courseDataSection].join(" ")}>
            <LightComponent top={40} right={30} />
            <LightComponent top={80} right={80} />
            <DataStateWrapper isLoading={isLoading} error={error}>
                <GeneralCourseData data={data ?? ({} as Course)} />
                <Authors data={data ?? ({} as Course)} />
                <CourseDescription data={data ?? ({} as Course)} />
                <DetailsCourse
                    data={data ?? ({} as Course)}
                    type={"content"}
                    titleContain={
                        <>
                            <span
                                className={["span-pr-color", "upperCase"].join(
                                    " "
                                )}
                            >
                                contenido
                            </span>{" "}
                            del curso
                        </>
                    }
                />
                <DetailsCourse
                    data={data ?? ({} as Course)}
                    type={"learn"}
                    titleContain={
                        <>
                            ¿Qué harás y{" "}
                            <span
                                className={["span-pr-color", "upperCase"].join(
                                    " "
                                )}
                            >
                                aprenderás
                            </span>
                        </>
                    }
                />
            </DataStateWrapper>
        </section>
    );
}

export default CourseDataSection;
