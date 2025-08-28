import { useEffect } from "react";
import BestPlayersSection from "../../components/BestPlayersSection";
import CoursesRecomended from "../../components/CoursesRecomended";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import UserCoursesSection from "../../components/UserCoursesSection";
import FeedbackMessage from "../../components/FeedbackMessage";
import TitleHx from "../../components/TitleHx";
import { useProfessorMsgStore } from "../../hooks/useProfessorMsgStore";
import ProfessorFixedMessage from "../../components/ProfessorFixedMessage";

type Props = {};

function Dashboard({}: Props) {
    const { user } = useUserAuthStore();
    const { setState, state, setValue } = useProfessorMsgStore();

    useEffect(() => {
        if (user?.firstLogin) {
            setValue("firstLogin");
            setState(user.firstLogin);
        }
    }, [user?.firstLogin]);

    return (
        <>
            {user?.firstLogin && state && <ProfessorFixedMessage />}
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
