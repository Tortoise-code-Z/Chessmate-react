import { useMutation } from "@tanstack/react-query";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { UserAuth, CustomError, BBDD } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { customError } from "../utils/errors";
import { getDataLocalStorage, setItemLocalStorage } from "../api";

/**
 * useFirstLogin - Custom React hook to mark a user as having completed their first login.
 *
 * This hook:
 * - Retrieves the application database from local storage.
 * - Finds the user by the provided userID.
 * - Updates the user's `isFirstLogin` flag to `false`.
 * - Saves the updated database back to local storage.
 * - Updates the global user authentication state and stores it under `USER_AUTH_KEY`.
 * - Uses React Query's `useMutation` to manage the asynchronous mutation.
 *
 * @returns A React Query mutation object containing `mutate`, `data`, `error`, and `status`.
 */

export function useFirstLogin() {
    const { setUser } = useUserAuthStore();

    const firstLogin = async (userID: number): Promise<UserAuth> => {
        const data = getDataLocalStorage(DATABASE_KEY);
        if (!data)
            throw customError({
                code: "DB_ERROR",
                message: "Ha habido un error al recuperar los datos...",
            });

        const currentUser = data.users.find((u) => u.userID === userID);

        if (!currentUser) {
            throw customError({
                code: "INVALID_USER",
                message:
                    "Ha habido un problema al intentar recuperar el usuario.",
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
    };

    return useMutation<UserAuth, CustomError, number>({
        mutationFn: firstLogin,
        onSuccess: (data: UserAuth) => {
            localStorage.setItem(USER_AUTH_KEY, JSON.stringify(data));
            setUser(data);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
