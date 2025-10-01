import { Navigate, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import useHaveObtainedCourse from "../../hooks/useHaveObtainedCourse";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import { ReactNode, useEffect } from "react";
import { asNumber, isBoolean } from "../../utils/general";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {
    children: ReactNode;
};

/**
 * IsAutorizedToCourse - React component that restricts access to a course
 * based on whether the user has purchased/obtained it.
 *
 * Features:
 * - Retrieves course ID from route parameters (`useParams`) and user ID from `useUserAuthStore`.
 * - Checks course access with `useHaveObtainedCourse` and handles loading and error states.
 * - Uses `useFeedbackMessageStore` to display error messages if the user is unauthorized or if there is a data fetch error.
 * - Shows `LoadingPage` while checking course access.
 * - Redirects unauthorized users to the course detail page (`PATHS.coursesDetail`) if they haven't obtained the course or an error occurs.
 * - Renders child components only if the user is authorized to access the course.
 *
 * Props:
 * - `children`: ReactNode(s) to render if the user is authorized to view the course.
 *
 * @returns JSX.Element: Either a loading indicator, a redirect, or the authorized children.
 */

function IsAutorizedToCourse({ children }: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();
    const { setPath, setMsg, setState, setType } = useFeedbackMessageStore();

    const { data, isLoading, error } = useHaveObtainedCourse(
        asNumber(Number(params.id)),
        asNumber(user?.userID),
        DATABASE_KEY
    );

    useEffect(() => {
        if (isBoolean(data) && !data && !error) {
            setType("error");
            setMsg("Para acceder al curso primero debes comprarlo...");
            setState(true);
            setPath(
                PATHS.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`.toString()
                )
            );
        }

        if (error) {
            setType("error");
            setMsg("Ha habido un error al intentar acceder al curso...");
            setState(true);
            setPath(
                PATHS.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`.toString()
                )
            );
        }
    }, [data, setType, setMsg, setState, error]);

    if (isLoading) return <LoadingPage msg="Cargando curso..." />;

    if (!data || error) {
        return (
            <Navigate
                to={PATHS.coursesDetail.replace(":id", `${Number(params.id)}`)}
            />
        );
    }

    return <>{children}</>;
}

export default IsAutorizedToCourse;
