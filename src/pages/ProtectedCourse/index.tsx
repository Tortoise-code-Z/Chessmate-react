import { Navigate, Outlet, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { paths } from "../../consts/paths";
import useHaveObtainedCourse from "../../hooks/useHaveObtainedCourse";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {};

function ProtectedCourse({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const { data, isLoading } = useHaveObtainedCourse(
        Number(params.id),
        user?.userID as number,
        DATABASE_KEY
    );

    const { setMsg, setState, setType } = useFeedbackMessageStore();

    if (isLoading) return <LoadingPage msg="Comprobando curso obtenido..." />;

    if (!data) {
        setType("error");
        setMsg("No tienes este curso obtenido...");
        setState(true);
        return (
            <Navigate
                to={`/${paths.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`
                )}`}
            />
        );
    }

    return <Outlet />;
}

export default ProtectedCourse;
