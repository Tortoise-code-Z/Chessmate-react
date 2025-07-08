import { Navigate, Outlet } from "react-router-dom";
import { paths } from "../consts/paths";

type Props = {};

function IsAuthorized({}: Props) {
    const isAuth = false;

    if (!isAuth) Navigate({ to: `/${paths.login}` });

    return <Outlet />;
}

export default IsAuthorized;
