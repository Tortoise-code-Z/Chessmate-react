import { useMutation, useQueryClient } from "@tanstack/react-query";
import { LoginSchemaValues } from "../Schemas/loginSchema";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { BBDD, CustomError, UserAuth } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useNavigate } from "react-router-dom";
import { paths } from "../consts/paths";
import { customError } from "../utils/errors";

export function useLogin() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();
    const queryClient = useQueryClient();

    const login = async (loginData: LoginSchemaValues): Promise<UserAuth> => {
        const getData = localStorage.getItem(DATABASE_KEY);

        if (!getData)
            throw customError({
                code: "DB_ERROR",
                message: "Ha habido un error al recuperar los datos...",
            });

        const data: BBDD = JSON.parse(getData);

        const users = data.users;
        const user = users.find((u) => u.username === loginData.username);
        if (!user)
            throw customError({
                code: "INVALID_USER",
                message: "Usuario o contraseña incorrecto.",
            });

        const isCorrectPassword = user.password === loginData.password;
        if (!isCorrectPassword)
            throw customError({
                code: "INVALID_PASSWORD",
                message: "Usuario o contraseña incorrecto.",
            });

        return {
            username: user.username,
            userID: user.userID,
            firstLogin: user.isFirstLogin,
        };
    };

    return useMutation<UserAuth, CustomError, LoginSchemaValues>({
        mutationFn: login,
        onSuccess: (data: UserAuth) => {
            localStorage.setItem(USER_AUTH_KEY, JSON.stringify(data));
            setUser(data);
            navigate(`/${paths.dashboard}`);
            queryClient.clear();
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
