import BestPlayersSection from "../../components/BestPlayersSection";
import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import UserCoursesSection from "../../components/UserCoursesSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";
import FeedbackListener from "../../components/FeedbackListener";

type Props = {};

/**
 * Dashboard component that serves as the main user dashboard displaying courses, recommendations, and top players.
 *
 * Features:
 * - `ProfessorFixedMessage`: Displays a fixed message from the professor with conditional rendering.
 * - `FeedbackMessage`: Shows user feedback or notifications.
 * - `UserCoursesSection`: Displays the current user's courses with a customizable navbar height.
 * - `CoursesRecomended`: Suggests courses for the user to purchase with a customizable title and layout.
 * - `BestPlayersSection`: Displays a section highlighting top players.
 *
 * Hooks:
 * - `useUserAuthStore`: Retrieves the current authenticated user's ID.
 *
 * Props: none
 *
 * @returns JSX element rendering the full user dashboard with courses, recommendations, and best players.
 */

function Dashboard({}: Props) {
    const { user } = useUserAuthStore();

    return (
        <>
            <FeedbackListener />
            <ProfessorFixedMessage userCondition={true} />
            <FeedbackMessage />

            <UserCoursesSection navbarHeight={true}>
                <TitleHx level={2}>
                    Mis{" "}
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        cursos
                    </span>
                </TitleHx>
            </UserCoursesSection>

            <CoursesRecomended
                titleContain={
                    <>
                        <span
                            className={["span-pr-color", "upperCase"].join(" ")}
                        >
                            Comprar
                        </span>{" "}
                        cursos
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
