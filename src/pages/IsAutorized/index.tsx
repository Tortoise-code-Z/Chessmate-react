import { Navigate } from "react-router-dom";
import { paths } from "../../consts/paths";
import LoadingPage from "../../components/LoadingPage";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { ReactNode } from "react";

type Props = { children: ReactNode };

function IsAuthorized({ children }: Props) {
    const { user, isLoading } = useUserAuthStore();

    console.log(isLoading, user);

    if (isLoading && !user)
        return <LoadingPage msg="Revisando autorización..." />;

    if (!user) {
        return <Navigate to={`/${paths.login}`} />;
    }

    return <>{children}</>;
}

export default IsAuthorized;
