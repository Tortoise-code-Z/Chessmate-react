import { Navigate, Outlet, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useCourseExists from "../../hooks/useExistsCourse";

type Props = {};

function CourseExists({}: Props) {
    const params = useParams();

    const { data, isLoading } = useCourseExists(
        Number(params.id),
        DATABASE_KEY
    );

    if (isLoading) return <LoadingPage msg="Comprobando curso obtenido..." />;

    if (!data) {
        return <Navigate to={`/${PATHS.courses}`} />;
    }

    return <Outlet />;
}

export default CourseExists;
