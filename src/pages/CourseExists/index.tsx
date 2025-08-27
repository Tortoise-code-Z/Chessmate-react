import { Navigate, Outlet, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";
import useCourseExists from "../../hooks/useExistsCourse";

type Props = {};

function CourseExists({}: Props) {
    const params = useParams();

    const { data, isLoading } = useCourseExists(
        Number(params.id),
        DATABASE_KEY
    );

    const { setMsg, setState, setType } = useFeedbackMessageStore();

    if (isLoading) return <LoadingPage msg="Comprobando curso obtenido..." />;

    if (!data) {
        setType("error");
        setMsg("No se ha encontrado el curso que buscas...");
        setState(true);
        return <Navigate to={`/${PATHS.courses}`} />;
    }

    return <Outlet />;
}

export default CourseExists;
