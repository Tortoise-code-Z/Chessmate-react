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
            />
            <BestPlayersSection />
            <UsersOpinionSection />
            <CloseHomeSection />
        </>
    );
}

export default Home;
