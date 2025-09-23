import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useFeedbackMessageStore } from "../../hooks/useFeedbackMesssageStore";

type Props = {};

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
