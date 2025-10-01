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
 * CourseExists - React component that verifies the existence of a course before rendering its content.
 *
 * Features:
 * - Uses `useCourseExists` to check if a course with the given ID exists in the database.
 * - Shows `LoadingPage` while the course existence check is in progress.
 * - Displays feedback messages using `useFeedbackMessageStore` if the course does not exist or an error occurs.
 * - Redirects to the courses page using `Navigate` if the course is not found.
 * - Renders child components only if the course exists and is valid.
 *
 * Props:
 * - `children`: ReactNode elements to render if the course exists.
 *
 * @returns JSX.Element: Either the child components, a loading page, or a redirect to the courses page.
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
            setPath(PATHS.courses);
        }

        if (error) {
            setType("error");
            setMsg("Ha habido un error al intentar acceder al curso...");
            setState(true);
            setPath(PATHS.courses);
        }
    }, [data, setType, setMsg, setState, error]);

    if (isLoading) return <LoadingPage msg="Comprobando curso.." />;

    if (!data) {
        return <Navigate to={PATHS.courses} />;
    }

    return <>{children}</>;
}

export default CourseExists;
