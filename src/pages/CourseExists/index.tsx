import { Navigate, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import useCourseExists from "../../hooks/useExistsCourse";
import { ReactNode } from "react";

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

    const { data, isLoading } = useCourseExists(
        Number(params.id),
        DATABASE_KEY
    );

    if (isLoading) return <LoadingPage msg="Cargando curso..." />;

    if (!data) {
        return <Navigate to={`/${PATHS.courses}`} />;
    }

    return <>{children}</>;
}

export default CourseExists;
