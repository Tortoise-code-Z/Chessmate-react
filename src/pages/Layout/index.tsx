import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../../components/ScrollToTop";

type Props = {};

function Layout({}: Props) {
    return (
        <>
            <Header />
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
