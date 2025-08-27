import { NavLink, useParams } from "react-router-dom";
import AuthorsSection from "./AuthorsSection";
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
import { PATHS } from "../../../consts/paths";

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
        <section className={styles.courseDataSection}>
            {/* --- */}
            <LightComponent top={40} right={30} />
            <LightComponent top={80} right={80} />
            {/* --- */}

            <DataStateWrapper isLoading={isLoading} error={error}>
                <div className={styles.breadcrumb}>
                    <NavLink to={`/${PATHS.courses}`}>Cursos</NavLink>
                    <span>{">"}</span>
                    <p>{data?.title}</p>
                </div>
                <GeneralCourseData data={data ?? ({} as Course)} />
                <AuthorsSection data={data ?? ({} as Course)} />
                <CourseDescription level={2} data={data ?? ({} as Course)} />
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
