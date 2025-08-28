import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USER_AUTH_KEY } from "../consts/dataBaseKey";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../consts/paths";
import { removeItemLocalStorage } from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";

/**
 * Custom hook to handle user sign-out functionality.
 *
 * - Uses React Query's `useMutation` to manage the sign-out process and handle errors.
 * - Removes authenticated user data from local storage.
 * - Clears React Query cache and resets global user state on success.
 * - Navigates to the index page after signing out.
 * - Triggers feedback messages via `useFeedbackMessageStore` if sign-out fails.
 *
 * @returns React Query's mutation object with methods like `mutate`, `mutateAsync`, and state properties (`isLoading`, `error`, etc.).
 */

export function useSignout() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const {
        setState: setFeedbackState,
        setMsg,
        setType,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    const login = async (): Promise<void> => {
        try {
            removeItemLocalStorage(USER_AUTH_KEY);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useMutation({
        mutationFn: login,
        onSuccess: () => {
            queryClient.clear();
            setUser(null);
            navigate(`${PATHS.index}`);
        },
        onError: (error) => {
            console.log(error);
            setFeedbackState(true);
            setPath(location.pathname);
            setMsg(
                "No se ha podido cerrar sesión. Contacte con nuestro equipo."
            );
            setType("error");
        },
    });
}
