import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that automatically scrolls the window to the top on route changes.
 *
 * - Uses `useLocation` from `react-router-dom` to detect changes in the current pathname.
 * - Calls `window.scrollTo(0, 0)` whenever the pathname changes to ensure the user starts at the top of the page.
 *
 * Props:
 * - None.
 *
 * @returns `null`. This component performs a side effect only.
 */

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
