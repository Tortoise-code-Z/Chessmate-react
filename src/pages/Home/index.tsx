import { Navigate } from "react-router-dom";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { paths } from "../../consts/paths";
import Hero from "../../components/Hero";
import CoursesDataSection from "../../components/CoursesDataSection";
import SignupCallToAction from "../../components/SignupCallToAction";
import BestSellersSection from "../../components/BestSellersSection";
import CloseHomeSection from "../../components/CloseHomeSection";

type Props = {};

function Home({}: Props) {
    const { user } = useUserAuthStore();

    if (user) {
        return <Navigate to={`/${paths.dashboard}`} replace />;
    }

    return (
        <>
            <Hero />
            <CoursesDataSection />
            <SignupCallToAction />
            <BestSellersSection />
            <CloseHomeSection />
        </>
    );
}

export default Home;
