import { Navigate, Outlet, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import useHaveObtainedCourse from "../../hooks/useHaveObtainedCourse";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";

type Props = {};

function ProtectedCourse({}: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const { data, isLoading } = useHaveObtainedCourse(
        Number(params.id),
        user?.userID as number,
        DATABASE_KEY
    );

    if (isLoading) return <LoadingPage msg="Comprobando curso obtenido..." />;

    if (!data) {
        return (
            <Navigate
                to={`/${PATHS.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`
                )}`}
            />
        );
    }

    return <Outlet />;
}

export default ProtectedCourse;
