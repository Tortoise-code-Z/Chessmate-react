import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../../components/ScrollToTop";

type Props = {};

/**
 * Layout component that provides the overall page structure including header, footer, and main content.
 *
 * Features:
 * - `Header`: Renders the site header.
 * - `ScrollToTop`: Ensures the page scrolls to top on navigation.
 * - `Outlet`: Placeholder for nested route content.
 * - `Footer`: Renders the site footer.
 *
 * @returns JSX element rendering the common layout structure for all pages.
 */

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
