import { useParams } from "react-router-dom";
import AboutAuthor from "./AboutAuthor";
import CourseClassroomBanner from "./CourseClassroomBanner";
import DescriptionCourseSection from "./DescriptionCourseSection";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useCourse from "../../hooks/useCourse";
import { Course, IsObtainedCourse } from "../../types/types";
import DataStateWrapper from "../../components/DataStateWrapperProps";
import UserCoursesSection from "../../components/UserCoursesSection";
import CourseClassroomContent from "./CourseClassroomContent";

type Props = {};

function ObtaindeCourseClassroom({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const { data, isLoading, error } = useCourse(
        DATABASE_KEY,
        Number(params.id),
        user?.userID
    );

    return (
        <>
            <DataStateWrapper isLoading={isLoading} error={error}>
                <CourseClassroomBanner
                    data={data ?? ({} as Course & IsObtainedCourse)}
                />
                <DescriptionCourseSection
                    data={data ?? ({} as Course & IsObtainedCourse)}
                />
                <CourseClassroomContent
                    data={data ?? ({} as Course & IsObtainedCourse)}
                />
                <AboutAuthor data={data ?? ({} as Course & IsObtainedCourse)} />
                <UserCoursesSection
                    obtainedCoursesLimit={3}
                    showDefaultCourses={false}
                >
                    <>
                        <h2>
                            <span
                                className={["upperCase", "span-pr-color"].join(
                                    " "
                                )}
                            >
                                otros
                            </span>{" "}
                            de mis cursos
                        </h2>
                    </>
                </UserCoursesSection>
            </DataStateWrapper>
        </>
    );
}

export default ObtaindeCourseClassroom;
