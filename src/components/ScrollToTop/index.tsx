import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Component that automatically scrolls the window to the top
 * whenever the route changes.
 *
 * - Uses `useLocation` from react-router to detect path changes.
 * - Uses `useEffect` to trigger `window.scrollTo(0, 0)` on path updates.
 *
 * Props:
 * - None.
 *
 * @returns `null` as it does not render any visible elements.
 */

function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

export default ScrollToTop;
