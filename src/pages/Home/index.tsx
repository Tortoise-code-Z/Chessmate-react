import { Navigate } from "react-router-dom";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { PATHS } from "../../consts/paths";
import Hero from "./Hero";
import CoursesDataSection from "./CoursesDataSection";
import SignupCallToAction from "./SignupCallToAction";
import BestSellersSection from "../../components/BestSellersSection";
import CloseHomeSection from "./CloseHomeSection";
import BestPlayersSection from "../../components/BestPlayersSection";
import UsersOpinionSection from "./UsersOpinionSection";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";

type Props = {};

/**
 * Home component that serves as the landing page for unauthenticated users.
 *
 * Features:
 * - Redirects authenticated users to the dashboard using `Navigate`.
 * - `ProfessorFixedMessage`: Displays a fixed message from the professor.
 * - `Hero`: Main hero section of the homepage.
 * - `CoursesDataSection`: Displays courses overview or featured courses.
 * - `SignupCallToAction`: Prompts users to sign up.
 * - `BestSellersSection`: Highlights top-selling courses with customizable display.
 * - `BestPlayersSection`: Shows top players.
 * - `UsersOpinionSection`: Displays user testimonials or opinions.
 * - `CloseHomeSection`: Closing section of the homepage.
 *
 * Hooks:
 * - `useUserAuthStore`: Retrieves the current authenticated user's information.
 *
 * @returns JSX element rendering the full homepage for unauthenticated users.
 */

function Home({}: Props) {
    const { user } = useUserAuthStore();

    if (user) {
        return <Navigate to={`/${PATHS.dashboard}`} replace />;
    }

    return (
        <>
            <ProfessorFixedMessage />
            <Hero />
            <CoursesDataSection />
            <SignupCallToAction />
            <BestSellersSection
                limit={3}
                display="Col"
                titleText="Nuestros cursos más"
                titleTextSpan="vendidos"
                titleDisplay="Col"
                requiredIsObtained={false}
            />
            <BestPlayersSection />
            <UsersOpinionSection />
            <CloseHomeSection />
        </>
    );
}

export default Home;
