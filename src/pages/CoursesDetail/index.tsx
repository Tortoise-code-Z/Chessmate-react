import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseDataSection from "./CourseDataSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import CourseCommentSection from "../../components/CourseCommentSection";
import { asNumber } from "../../utils/general";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import FeedbackListener from "../../components/FeedbackListener";

type Props = {};

/**
 * CoursesDetail component that displays detailed information about a course along with related interactions.
 *
 * Features:
 * - `ProfessorFixedMessage`: Shows a fixed message from the professor.
 * - `FeedbackMessage`: Displays feedback or notifications related to the course.
 * - `CourseDataSection`: Shows detailed course information.
 * - `CourseCommentSection`: Displays user comments for the course.
 * - `CoursesRecomended`: Suggests other courses the user might be interested in, with customizable title and layout.
 *
 * State: none
 *
 * Hooks:
 * - `useUserAuthStore`: Retrieves the current authenticated user's ID.
 *
 * Props: none
 *
 * @returns JSX element rendering the full course detail view with comments and recommended courses.
 */

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();

    const { state, path, setPath, setState } = useFeedbackMessageStore();
    const location = useLocation();

    useEffect(() => {
        if (state && path !== location.pathname) {
            setState(false);
            setPath("");
        }
    }, [state, path, setState, setPath]);

    return (
        <>
            <FeedbackListener />
            <ProfessorFixedMessage />
            <FeedbackMessage time={8000} />

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
                userID={asNumber(user?.userID)}
            />
        </>
    );
}

export default CoursesDetail;
