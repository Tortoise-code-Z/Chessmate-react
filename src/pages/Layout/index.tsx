import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";
import ScrollToTop from "../../components/ScrollToTop";
import { useState } from "react";
import HamburguerMenu from "./Header/HamburgureMenu";
import { useSignout } from "../../hooks/useSignout";

type Props = {};

/**
 * Layout - React component that provides the main layout structure for the application.
 *
 * Features:
 * - Renders the `Header` and `Footer` around the main content (`Outlet`).
 * - Includes `ScrollToTop` to reset scroll position on route changes.
 * - Handles a hamburger menu (`HamburguerMenu`) with open/close state.
 * - Integrates sign-out functionality via `useSignout`.
 * - Manages the visibility of the hamburger menu using local state.
 *
 * Props:
 * - None.
 *
 * @returns JSX.Element: The app layout with header, footer, main content, and optional hamburger menu.
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
