import { Navigate } from "react-router-dom";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { paths } from "../../consts/paths";
import Hero from "../../components/Hero";
import CoursesDataSection from "../../components/CoursesDataSection";

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
        </>
    );
}

export default Home;
