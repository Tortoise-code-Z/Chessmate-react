import { useTranslation } from "react-i18next";
import BestPlayersSection from "../../components/BestPlayersSection";
import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import UserCoursesSection from "../../components/UserCoursesSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import FeedbackListener from "../../components/FeedbackListener";
import ProfessorListener from "../../components/ProfessorListenner";
import { Helmet } from "react-helmet-async";

/**
 * Dashboard - React component that serves as the main user dashboard,
 * displaying courses, recommendations, feedback, and other personalized sections.
 *
 * Features:
 * - Integrates `FeedbackListener` and `FeedbackMessage` to handle and display system/user feedback.
 * - Shows `ProfessorFixedMessage` for important notices or tips.
 * - Displays the user's enrolled courses with `UserCoursesSection`, including a styled title.
 * - Recommends additional courses via `CoursesRecomended`, personalized using the logged-in user's ID.
 * - Highlights top-performing players with `BestPlayersSection`.
 * - Retrieves authenticated user data from `useUserAuthStore`.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: The complete user dashboard with multiple sections (courses, recommendations, feedback, and rankings).
 */

function Dashboard() {
    const { user } = useUserAuthStore();
    const { t } = useTranslation("dashboard");

    return (
        <>
            <Helmet>
                <title>{t("meta.title")}</title>
            </Helmet>
            <FeedbackListener />
            <ProfessorListener />

            <ProfessorFixedMessage userCondition={true} />
            <FeedbackMessage />

            <UserCoursesSection navbarHeight={true}>
                <TitleHx level={2}>
                    {t("myCourses.title")}{" "}
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        {t("myCourses.highlight")}
                    </span>
                </TitleHx>
            </UserCoursesSection>

            <CoursesRecomended
                titleContain={
                    <>
                        <span
                            className={["span-pr-color", "upperCase"].join(" ")}
                        >
                            {t("recommended.highlight")}
                        </span>{" "}
                        {t("recommended.rest")}
                    </>
                }
                titleDisplay={"Row"}
                titleAlign={"start"}
                limit={5}
                userID={user?.userID}
            />
            <BestPlayersSection />
        </>
    );
}

export default Dashboard;
