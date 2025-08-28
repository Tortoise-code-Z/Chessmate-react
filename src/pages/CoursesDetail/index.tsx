import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseDataSection from "./CourseDataSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import CourseCommentSection from "../../components/CourseCommentSection";

type Props = {};

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();
    const { state } = useProfessorMsgStore();

    return (
        <>
            {state && <ProfessorFixedMessage />}
            <FeedbackMessage />
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
