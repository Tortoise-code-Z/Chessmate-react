import { Navigate, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import useHaveObtainedCourse from "../../hooks/useHaveObtainedCourse";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import { ReactNode, useEffect } from "react";
import { asNumber } from "../../utils/general";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {
    children: ReactNode;
};

/**
 * ProtectedCourse component that guards access to a course classroom based on user enrollment.
 *
 * Features:
 * - Displays a LoadingPage while verifying if the user has obtained the course.
 * - Redirects to the course detail page if the user has not obtained the course.
 * - Renders child routes via Outlet if the user has access.
 *
 * Hooks:
 * - useParams: Retrieves the course ID from the route parameters.
 * - useUserAuthStore: Provides the current authenticated user's data.
 * - useHaveObtainedCourse: Checks if the user has obtained the specified course.
 *
 * @returns JSX element rendering either the loading state, a redirect, or the protected course content.
 */

function ProtectedCourse({ children }: Props) {
    const params = useParams();
    const { user } = useUserAuthStore();

    const { setPath, setReset, setMsg, setState, setType } =
        useFeedbackMessageStore();

    useEffect(() => {
        if (!user) {
            setType("error");
            setMsg("Para acceder al curso primero debes iniciar sesión...");
            setState(true);
            setReset(false);
            setPath(`/${PATHS.coursesDetail.replace(":id", `${params.id}`)}`);
        }
    }, [setType, setMsg, setState, user, params.id]);

    if (!user) {
        return (
            <Navigate
                to={`/${PATHS.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`
                )}`}
            />
        );
    }

    const { data, isLoading, error } = useHaveObtainedCourse(
        asNumber(Number(params.id)),
        asNumber(user?.userID),
        DATABASE_KEY
    );

    useEffect(() => {
        if (!data && !error) {
            setType("error");
            setMsg("Para acceder al curso primero debes comprarlo...");
            setState(true);
            setReset(false);
            setPath(
                `/${PATHS.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`.toString()
                )}`
            );
        }

        if (error) {
            setType("error");
            setMsg("Ha habido un error al intentar acceder al curso...");
            setState(true);
            setReset(false);
            setPath(
                `/${PATHS.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`.toString()
                )}`
            );
        }
    }, [data, setType, setMsg, setState, error]);

    if (isLoading) return <LoadingPage msg="Cargando curso..." />;

    if (!data || error) {
        return (
            <Navigate
                to={`/${PATHS.coursesDetail.replace(
                    ":id",
                    `${Number(params.id)}`
                )}`}
            />
        );
    }

    return <>{children}</>;
}

export default ProtectedCourse;
