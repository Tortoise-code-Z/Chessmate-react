import { useEffect, useState } from "react";
import BestPlayersSection from "../../components/BestPlayersSection";
import CoursesRecomended from "../../components/CoursesRecomended";
import WelcomeScreen from "./WelcomeScreen";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { useFirstLogin } from "../../hooks/useFirstLogin";
import UserCoursesSection from "../../components/UserCoursesSection";

type Props = {};

function Dashboard({}: Props) {
    const { user } = useUserAuthStore();
    const [isOpen, setIsOpen] = useState<boolean>(false);

    useEffect(() => {
        if (user?.firstLogin) setIsOpen(user.firstLogin);
    }, [user?.firstLogin]);

    const { mutate } = useFirstLogin();

    const handleButtonClick = () => {
        setIsOpen(false);
        if (user?.userID) mutate(user.userID);
    };

    return (
        <>
            {user?.firstLogin && isOpen ? (
                <WelcomeScreen onClick={handleButtonClick} />
            ) : (
                ""
            )}
            <UserCoursesSection navbarHeight={true}>
                <h2>
                    <span className={["span-pr-color", "upperCase"].join(" ")}>
                        Otros
                    </span>{" "}
                    de mis cursos
                </h2>
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
