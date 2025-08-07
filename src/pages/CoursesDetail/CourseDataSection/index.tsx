import { NavLink, useParams } from "react-router-dom";
import Authors from "./Authors";
import styles from "./CourseDataSection.module.css";
import CourseDescription from "./CourseDescription";
import DetailsCourse from "./DetailsCourse";
import GeneralCourseData from "./GeneralCourseData";
import useCourse from "../../../hooks/useCourse";
import DataStateWrapper from "../../../components/DataStateWrapperProps";
import { Course } from "../../../types/types";
import LightComponent from "../../../components/LightComponent";
import { useUserAuthStore } from "../../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../../consts/dataBaseKey";
import { paths } from "../../../consts/paths";

type Props = {};

function CourseDataSection({}: Props) {
    const { user } = useUserAuthStore();
    const params = useParams();

    const { data, isLoading, error } = useCourse(
        DATABASE_KEY,
        Number(params.id),
        user?.userID
    );

    return (
        <section className={[styles.courseDataSection].join(" ")}>
            <LightComponent top={40} right={30} />
            <LightComponent top={80} right={80} />
            <div className={[styles.breadcrumb].join(" ")}>
                <NavLink to={`/${paths.courses}`}>Cursos</NavLink>
                <span>{">"}</span>
                <p>{data?.title}</p>
            </div>
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
