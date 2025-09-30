import { Navigate, useLocation } from "react-router-dom";
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
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import { useEffect } from "react";
import FeedbackListener from "../../components/FeedbackListener";

type Props = {};

/**
 * Home - React component that renders the landing page of the application,
 * showcasing courses, promotions, testimonials, and other key sections.
 *
 * Features:
 * - Redirects authenticated users to the dashboard using `Navigate`.
 * - Integrates `FeedbackListener` and `ProfessorFixedMessage` for global feedback and announcements.
 * - Displays multiple sections: `Hero`, `CoursesDataSection`, `SignupCallToAction`,
 *   `BestSellersSection`, `BestPlayersSection`, `UsersOpinionSection`, and `CloseHomeSection`.
 * - Manages feedback message state with `useFeedbackMessageStore`:
 *   - Resets feedback state when navigating between routes.
 *   - Syncs message visibility with the current path.
 * - Uses `useLocation` and `useEffect` to track route changes.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: The full homepage layout with promotional, interactive, and informational sections.
 */

function Home({}: Props) {
    const { user } = useUserAuthStore();

    if (user) {
        return <Navigate to={PATHS.dashboard} replace />;
    }

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

            <Hero />
            <CoursesDataSection />
            <SignupCallToAction />
            <BestSellersSection
                limit={3}
                display="Col"
                titleText="Nuestros cursos más"
                titleTextSpan="vendidos"
                titleDisplay="Col"
            />
            <BestPlayersSection />
            <UsersOpinionSection />
            <CloseHomeSection />
        </>
    );
}

export default Home;
