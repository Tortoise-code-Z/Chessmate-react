import { useLocation, useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ObtainedCourseDataSection from "./ObtainedCourseDataSection";
import TitleHx from "../../components/TitleHx";
import CourseCommentSection from "../../components/CourseCommentSection";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import { useEffect } from "react";

type Props = {};

function ObtainedCourseClassroom({}: Props) {
    const params = useParams();
    const {
        state: feedBackState,
        setState: setFeedbackState,
        path,
        setPath,
    } = useFeedbackMessageStore();
    const location = useLocation();

    useEffect(() => {
        setPath("");
    }, [location.pathname]);

    const { state } = useProfessorMsgStore();

    return (
        <>
            {state && <ProfessorFixedMessage />}
            {feedBackState && path === location.pathname && (
                <FeedbackMessage
                    onClose={() => {
                        setFeedbackState(false);
                    }}
                />
            )}
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
