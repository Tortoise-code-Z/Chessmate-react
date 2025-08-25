import IsAuthorized from "../IsAutorized";
import Layout from "../Layout";

export default function ProtectedLayout() {
    return (
        <IsAuthorized>
            <Layout />
        </IsAuthorized>
    );
}
