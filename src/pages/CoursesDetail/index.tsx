import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import CourseDataSection from "./CourseDataSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import CourseCommentSection from "../../components/CourseCommentSection";
import { asNumber } from "../../utils/general";
import FeedbackListener from "../../components/FeedbackListener";
import ProfessorListener from "../../components/ProfessorListenner";

type Props = {};

/**
 * CoursesDetail - React component that renders the detailed view of a specific course.
 *
 * Features:
 * - Includes `FeedbackListener` and `FeedbackMessage` for dynamic feedback display.
 * - Displays a fixed professor message via `ProfessorFixedMessage`.
 * - Renders the main course information with `CourseDataSection`.
 * - Shows course comments using `CourseCommentSection`.
 * - Displays recommended courses using `CoursesRecomended`, personalized with the user's ID if available.
 * - Uses CSS classes for styled headings and highlighted text spans in titles.
 *
 * Props:
 * - No props are required for this component.
 *
 * @returns JSX.Element: A detailed course page with information, comments, and recommended courses.
 */

function CoursesDetail({}: Props) {
    const { user } = useUserAuthStore();

    return (
        <>
            <FeedbackListener />
            <ProfessorListener />

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
