import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ObtainedCourseDataSection from "./ObtainedCourseDataSection";
import CourseCommentSection from "../CoursesDetail/CourseCommentSection";
import TitleHx from "../../components/TitleHx";

type Props = {};

function ObtainedCourseClassroom({}: Props) {
    const params = useParams();
    return (
        <>
            <ObtainedCourseDataSection />
            <CourseCommentSection />
            <UserCoursesSection
                obtainedCoursesLimit={3}
                showDefaultCourses={false}
                obtainedCourseClassID={Number(params.id)}
                msg="Parece que no tienes más cursos..."
            >
                <TitleHx level={2}>
                    <span className={["upperCase", "span-pr-color"].join(" ")}>
                        otros
                    </span>{" "}
                    de mis cursos
                </TitleHx>
            </UserCoursesSection>
        </>
    );
}

export default ObtainedCourseClassroom;
