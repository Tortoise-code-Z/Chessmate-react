import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {};

/**
 * Listener component that resets feedback messages on route change.
 *
 * - Monitors the current route using `useLocation` from React Router.
 * - Uses `useFeedbackMessageStore` to manage feedback message state.
 * - Clears message content, type, and visibility when navigating to a new path.
 *
 * Props:
 * - None.
 *
 * @returns `null` (does not render any visible elements).
 */

export default function FeedbackListener({}: Props) {
    const { state, path, setPath, setState, setMsg, setType } =
        useFeedbackMessageStore();
    const location = useLocation();

    useEffect(() => {
        if (state && path !== location.pathname) {
            setState(false);
            setMsg("");
            setType(null);
            setPath("");
        }
    }, [state, path, setState, setPath]);

    return null;
}
