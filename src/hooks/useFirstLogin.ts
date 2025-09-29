import { useMutation } from "@tanstack/react-query";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { UserAuth, CustomError, BBDD } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { customError } from "../utils/errors";
import { getDataLocalStorage, setItemLocalStorage } from "../api";
import { ERROR_GET_DATA_MSG, ERROR_GET_USER_MSG } from "../consts/api";

/**
 * useFirstLogin - Custom React hook for handling a user's first login.
 *
 * This hook:
 * - Uses React Query's `useMutation` to mark a user's first login as completed.
 * - Updates local storage with the user's updated first login status.
 * - Updates global user authentication state via `useUserAuthStore`.
 * - Handles errors for missing database or invalid user.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger the first login update.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles `onSuccess` and `onError` callbacks.
 */

export function useFirstLogin() {
    const { setUser } = useUserAuthStore();

    const firstLogin = async (userID: number): Promise<UserAuth> => {
        try {
            const data = getDataLocalStorage<BBDD>(DATABASE_KEY);
            if (!data)
                throw customError({
                    code: "DB_ERROR",
                    message: ERROR_GET_DATA_MSG,
                });

            const currentUser = data.users.find((u) => u.userID === userID);
            if (!currentUser) {
                throw customError({
                    code: "INVALID_USER",
                    message: ERROR_GET_USER_MSG,
                });
            }

            const modifyUser = { ...currentUser, isFirstLogin: false };

            const newData = {
                ...data,
                users: [
                    ...data.users.map((u) =>
                        u.userID === userID ? modifyUser : u
                    ),
                ],
            };

            setItemLocalStorage<BBDD>(DATABASE_KEY, newData);

            return {
                username: modifyUser.username,
                userID: modifyUser.userID,
                firstLogin: false,
            };
        } catch (error) {
            throw error;
        }
    };

    return useMutation<UserAuth, CustomError, number>({
        mutationFn: firstLogin,
        onSuccess: (data: UserAuth) => {
            setItemLocalStorage(USER_AUTH_KEY, data);
            setUser(data);
        },
        onError: (error) => {
            console.error(error);
        },
    });
}
