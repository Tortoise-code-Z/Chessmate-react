import Layout from "../Layout";
import IsAuthorized from "../IsAutorized";

export default function ProtectedLayout() {
    return (
        <IsAuthorized>
            <Layout />
        </IsAuthorized>
    );
}
