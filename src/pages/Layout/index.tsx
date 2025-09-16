import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../../components/ScrollToTop";
import { useState } from "react";
import HamburguerMenu from "./Header/HamburgureMenu";
import { useSignout } from "../../hooks/useSignout";

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
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const { mutate } = useSignout();
    const handleSignOut = () => mutate();

    return (
        <>
            {isOpen && (
                <HamburguerMenu
                    setIsOpen={setIsOpen}
                    handleSignOut={handleSignOut}
                />
            )}

            <Header handleSignOut={handleSignOut} setIsOpen={setIsOpen} />
            <ScrollToTop />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}

export default Layout;
