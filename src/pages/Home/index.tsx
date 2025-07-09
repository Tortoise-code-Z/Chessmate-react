import { Navigate } from "react-router-dom";
import { useUserAuthStore } from "../../hooks/UseUserAuthStore";
import { paths } from "../../consts/paths";

type Props = {};

function Home({}: Props) {
    const { user } = useUserAuthStore();

    if (user) {
        return <Navigate to={`/${paths.dashboard}`} replace />;
    }
    return <div>Home</div>;
}

export default Home;
