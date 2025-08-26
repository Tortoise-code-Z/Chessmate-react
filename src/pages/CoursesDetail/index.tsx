import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseCommentSection from "./CourseCommentSection";
import CourseDataSection from "./CourseDataSection";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";

type Props = {};

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();

    const {
        state: feedBackState,
        msg,
        setState: setFeedbackState,
        type,
    } = useFeedbackMessageStore();

    const { state } = useProfessorMsgStore();

    return (
        <>
            {state && <ProfessorFixedMessage />}
            {feedBackState && (
                <FeedbackMessage
                    onClose={() => setFeedbackState(false)}
                    msg={msg}
                    type={type}
                />
            )}

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
