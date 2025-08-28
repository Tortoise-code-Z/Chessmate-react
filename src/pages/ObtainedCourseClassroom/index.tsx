import { useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ObtainedCourseDataSection from "./ObtainedCourseDataSection";
import TitleHx from "../../components/TitleHx";
import CourseCommentSection from "../../components/CourseCommentSection";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";

type Props = {};

function ObtainedCourseClassroom({}: Props) {
    const params = useParams();

    const { state } = useProfessorMsgStore();

    return (
        <>
            {state && <ProfessorFixedMessage />}
            <FeedbackMessage />
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
