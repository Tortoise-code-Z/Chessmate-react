import { useMutation } from "@tanstack/react-query";
import { LoginSchemaValues } from "../Schemas/loginSchema";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { CustomError, UserAuth } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useNavigate } from "react-router-dom";
import { paths } from "../consts/paths";
import { customError } from "../utils/errors";
import {
    checkPassword,
    getDataLocalStorage,
    getUserByUsername,
    setItemLocalStorage,
} from "../api";

export function useLogin() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();

    const login = async (loginData: LoginSchemaValues): Promise<UserAuth> => {
        const data = getDataLocalStorage(DATABASE_KEY);

        if (!data)
            throw customError({
                code: "DB_ERROR",
                message: "Ha habido un error al recuperar los datos...",
            });

        const user = getUserByUsername(loginData.username, data);

        if (!user)
            throw customError({
                code: "INVALID_USER",
                message: "Usuario o contraseña incorrecto.",
            });

        const isCorrectPassword = checkPassword(
            user.password,
            loginData.password
        );

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
            setItemLocalStorage<UserAuth>(USER_AUTH_KEY, data);
            setUser(data);
            navigate(`/${paths.dashboard}`);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
