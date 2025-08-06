import { useMutation } from "@tanstack/react-query";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { BBDD, CustomError, UserAuth } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { customError } from "../utils/errors";

export function useFirstLogin() {
    const { setUser } = useUserAuthStore();

    const firstLogin = async (userID: number): Promise<UserAuth> => {
        const getData = localStorage.getItem(DATABASE_KEY);

        if (!getData)
            throw customError({
                code: "DB_ERROR",
                message: "Ha habido un error al recuperar los datos...",
            });

        const data: BBDD = JSON.parse(getData);

        const currentUser = data.users.find((u) => u.userID === userID);

        if (!currentUser) {
            throw customError({
                code: "INVALID_USER",
                message:
                    "Ha habidoun problema al intentar recuperar el usuario.",
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

        localStorage.setItem(DATABASE_KEY, JSON.stringify(newData));

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
