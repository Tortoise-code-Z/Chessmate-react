import { useMutation, useQueryClient } from "@tanstack/react-query";
import { USER_AUTH_KEY } from "../consts/dataBaseKey";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../consts/paths";
import { removeItemLocalStorage } from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { ERROR_SIGN_OUT_MSG } from "../consts/api";

/**
 * useSignout - Custom React hook for signing out the current user.
 *
 * This hook:
 * - Uses React Query's `useMutation` to handle the sign-out process.
 * - Removes the authenticated user data from local storage.
 * - Clears the React Query cache on success.
 * - Interacts with global state stores:
 *    - `useUserAuthStore` to clear the authenticated user state.
 *    - `useFeedbackMessageStore` to display error messages if sign-out fails.
 * - Navigates to the index page after successful sign-out.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger the sign-out process.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles `onSuccess` (clear cache, reset user, navigate) and `onError` (show feedback) callbacks.
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
            console.error(error);
            setFeedbackState(true);
            setPath(location.pathname);
            setMsg(ERROR_SIGN_OUT_MSG);
            setType("error");
        },
    });
}
