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
 * Custom hook to handle user login functionality.
 *
 * - Uses React Query's `useMutation` to handle login requests and manage loading/error states.
 * - Retrieves user data from local storage and validates credentials.
 * - Stores authenticated user data and updates global user state on success.
 * - Triggers feedback messages via `useFeedbackMessageStore` on errors.
 *
 * @returns React Query's mutation object with methods like `mutate`, `mutateAsync`, and state properties (`isLoading`, `error`, etc.).
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
            navigate(`/${PATHS.dashboard}`);
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
