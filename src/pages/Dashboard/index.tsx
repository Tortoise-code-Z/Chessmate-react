import { useState } from "react";
import BestPlayersSection from "../../components/BestPlayersSection";
import ObtainedCoursesSection from "./ObtainedCoursesSection";
import ToBuySection from "./ToBuySection";
import WelcomeScreen from "./WelcomeScreen";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";

type Props = {};

function Dashboard({}: Props) {
    const { user } = useUserAuthStore();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const handleButtonClick = () => {
        setIsOpen(false);
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
