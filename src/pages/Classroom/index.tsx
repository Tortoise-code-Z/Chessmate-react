import { useLocation, useParams } from "react-router-dom";
import UserCoursesSection from "../../components/UserCoursesSection";
import ClassZoneSection from "./ClassZoneSection";
import TitleHx from "../../components/TitleHx";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useEffect } from "react";

type Props = {};

function Classroom({}: Props) {
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

    return (
        <>
            {feedBackState && path === location.pathname && (
                <FeedbackMessage
                    onClose={() => {
                        setFeedbackState(false);
                    }}
                />
            )}
            <ClassZoneSection />
            <UserCoursesSection
                obtainedCoursesLimit={3}
                defaultCourseClassID={Number(params.id)}
                showObtainedCourses={false}
            >
                <TitleHx level={2}>
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        Otros
                    </span>{" "}
                    de mis cursos
                </TitleHx>
            </UserCoursesSection>
        </>
    );
}

export default Classroom;
