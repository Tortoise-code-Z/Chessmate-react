import { Navigate, Outlet, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useCourseExists from "../../hooks/useExistsCourse";

type Props = {};

/**
 * Route guard component that checks if a course exists for the user.
 *
 * - Uses `useCourseExists` to verify the course by ID from the URL params.
 * - Shows a loading page while checking.
 * - Redirects to the courses page if the course does not exist.
 * - Renders nested routes via `<Outlet />` if the course exists.
 *
 * Props: none
 *
 * @returns JSX element rendering a loading page, redirect, or nested route.
 */

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
