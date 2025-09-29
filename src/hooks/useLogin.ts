import { useMutation } from "@tanstack/react-query";
import { LoginSchemaValues } from "../Schemas/loginSchema";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { BBDD, CustomError, UserAuth } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../consts/paths";
import { customError } from "../utils/errors";
import {
    checkPassword,
    getDataLocalStorage,
    getUserByUsername,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { ERROR_GET_DATA_MSG, ERROR_USER_PASSWORD_MSG } from "../consts/api";

/**
 * useLogin - Custom React hook for handling user login.
 *
 * This hook:
 * - Uses React Query's `useMutation` to authenticate a user based on username and password.
 * - Validates user existence and password correctness.
 * - Updates local storage with authenticated user data (`USER_AUTH_KEY`).
 * - Updates global user authentication state via `useUserAuthStore`.
 * - Navigates to the dashboard on successful login.
 * - Displays feedback messages for errors via `useFeedbackMessageStore`.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger the login process.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles `onSuccess` and `onError` callbacks.
 */

export function useLogin() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();

    const {
        setState: setFeedbackState,
        setMsg,
        setType,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    const login = async (loginData: LoginSchemaValues): Promise<UserAuth> => {
        try {
            const data = getDataLocalStorage<BBDD>(DATABASE_KEY);

            if (!data)
                throw customError({
                    code: "DB_ERROR",
                    message: ERROR_GET_DATA_MSG,
                });

            const user = getUserByUsername(loginData.username, data);

            if (!user)
                throw customError({
                    code: "INVALID_USER",
                    message: ERROR_USER_PASSWORD_MSG,
                });

            const isCorrectPassword = checkPassword(
                user.password,
                loginData.password
            );

            if (!isCorrectPassword)
                throw customError({
                    code: "INVALID_PASSWORD",
                    message: ERROR_USER_PASSWORD_MSG,
                });

            return {
                username: user.username,
                userID: user.userID,
                firstLogin: user.isFirstLogin,
            };
        } catch (error) {
            throw error;
        }
    };

    return useMutation<UserAuth, CustomError, LoginSchemaValues>({
        mutationFn: login,
        onSuccess: (data: UserAuth) => {
            setItemLocalStorage<UserAuth>(USER_AUTH_KEY, data);
            setUser(data);
            navigate(PATHS.dashboard);
        },
        onError: (error) => {
            console.error(error);
            setFeedbackState(true);
            setPath(location.pathname);
            setMsg(error.message);
            setType("error");
        },
    });
}
