import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
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
