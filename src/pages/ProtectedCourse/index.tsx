import { Navigate, useParams } from "react-router-dom";
import LoadingPage from "../../components/LoadingPage";
import { PATHS } from "../../consts/paths";
import useHaveObtainedCourse from "../../hooks/useHaveObtainedCourse";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { DATABASE_KEY } from "../../consts/dataBaseKey";
import { ReactNode } from "react";
import { asNumber } from "../../utils/general";

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

    const { data, isLoading, error } = useHaveObtainedCourse(
        null,
        asNumber(user?.userID),
        DATABASE_KEY
    );

    if (isLoading) return <LoadingPage msg="Cargando curso..." />;

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

    return <>{children}</>;
}

export default ProtectedCourse;
