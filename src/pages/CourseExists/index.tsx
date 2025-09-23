import { Navigate, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useCourseExists from "../../hooks/useExistsCourse";
import { ReactNode, useEffect } from "react";
import { asNumber, isBoolean } from "../../utils/general";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {
    children: ReactNode;
};

/**
 * Route guard component that checks if a course exists for the user.
 *
 * - Uses `useCourseExists` to verify the course by ID from the URL params.
 * - Shows a loading page while checking.
 * - Redirects to the courses page if the course does not exist.
 * - Renders nested routes via `<Outlet />` if the course exists.
 *
 * Props: `children` (ReactNode): Components to render if the course exists.
 *
 * @returns JSX element rendering a loading page, redirect, or nested route.
 */

function CourseExists({ children }: Props) {
    const params = useParams();

    const { setPath, setMsg, setState, setType } = useFeedbackMessageStore();

    const { data, isLoading, error } = useCourseExists(
        asNumber(Number(params.id)),
        DATABASE_KEY
    );

    useEffect(() => {
        if (isBoolean(data) && !data) {
            setType("error");
            setMsg("No se ha encontrado el curso que buscas...");
            setState(true);
            setPath(`/${PATHS.courses}`);
        }

        if (error) {
            setType("error");
            setMsg("Ha habido un error al intentar acceder al curso...");
            setState(true);
            setPath(`/${PATHS.courses}`);
        }
    }, [data, setType, setMsg, setState, error]);

    if (isLoading) return <LoadingPage msg="Comprobando curso.." />;

    if (!data) {
        return <Navigate to={`/${PATHS.courses}`} />;
    }

    return <>{children}</>;
}

export default CourseExists;
