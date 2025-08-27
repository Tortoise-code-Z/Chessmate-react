import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseDataSection from "./CourseDataSection";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import CourseCommentSection from "../../components/CourseCommentSection";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

type Props = {};

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();
    const location = useLocation();
    const {
        state: feedBackState,
        path,
        reset,
        setPath,
        setReset,
    } = useFeedbackMessageStore();

    useEffect(() => {
        if (reset) {
            setPath("");
        } else {
            setReset(true);
        }
    }, [location.pathname]);
    const { state } = useProfessorMsgStore();

    return (
        <>
            {state && <ProfessorFixedMessage />}
            {feedBackState && path === location.pathname && <FeedbackMessage />}

            <CourseDataSection />
            <CourseCommentSection />
            <CoursesRecomended
                titleContain={
                    <>
                        Tambien te puede{" "}
                        <span
                            className={["span-pr-color", "upperCase"].join(" ")}
                        >
                            Interesar
                        </span>
                    </>
                }
                titleDisplay={"Row"}
                titleAlign={"start"}
                limit={4}
                userID={user?.userID}
            />
        </>
    );
}

export default CoursesDetail;
