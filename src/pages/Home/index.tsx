import { Navigate } from "react-router-dom";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { paths } from "../../consts/paths";
import Hero from "./Hero";
import CoursesDataSection from "./CoursesDataSection";
import SignupCallToAction from "./SignupCallToAction";
import BestSellersSection from "../../components/BestSellersSection";
import CloseHomeSection from "./CloseHomeSection";
import BestPlayersSection from "../../components/BestPlayersSection";
import UsersOpinionSection from "./UsersOpinionSection";
import { useCantBuyStore } from "../../hooks/useCantBuyStore";
import CantBuyModal from "../../components/CantBuyModal";

type Props = {};

function Home({}: Props) {
    const { user } = useUserAuthStore();
    const { cantBuy } = useCantBuyStore();

    if (user) {
        return <Navigate to={`/${paths.dashboard}`} replace />;
    }

    return (
        <>
            {cantBuy && <CantBuyModal />}
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
