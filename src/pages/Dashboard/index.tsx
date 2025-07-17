import { useEffect, useState } from "react";
import BestPlayersSection from "../../components/BestPlayersSection";
import ObtainedCoursesSection from "../../components/ObtainedCoursesSection";
import ToBuySection from "../../components/ToBuySection";
import WelcomeScreen from "../../components/WelcomeScreen";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";

type Props = {};

function Dashboard({}: Props) {
    const { user } = useUserAuthStore();
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleButtonClick = () => {
        setIsOpen(false);
        // Mutacion para pasar el isFirstLogin del usuario a false
    };

    return (
        <>
            {user?.firstLogin && isOpen ? (
                <WelcomeScreen onClick={handleButtonClick} />
            ) : (
                ""
            )}
            <ObtainedCoursesSection />
            <ToBuySection />
            <BestPlayersSection />
        </>
    );
}

export default Dashboard;
