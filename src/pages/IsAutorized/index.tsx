import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../consts/paths";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";

type Props = {};

function IsAuthorized({}: Props) {
    const { user, isLoading } = useUserAuthStore();

    if (isLoading) return <p>Cargando...</p>;

    if (!user) return <Navigate to={`/${paths.login}`} />;

    return <Outlet />;
}

export default IsAuthorized;
