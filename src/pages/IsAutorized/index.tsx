import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../../consts/paths";
import LoadingPage from "../../components/LoadingPage";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";

type Props = {};

function IsAuthorized({}: Props) {
    const { user, isLoading } = useUserAuthStore();

    if (isLoading) return <LoadingPage msg="Revisando autorización..." />;

    if (!user) {
        return <Navigate to={`/${paths.login}`} />;
    } else {
        return <Outlet />;
    }
}

export default IsAuthorized;
