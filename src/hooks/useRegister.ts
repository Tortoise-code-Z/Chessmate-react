import { useMutation } from "@tanstack/react-query";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { BBDD, CustomError, User, UserAuth } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useNavigate } from "react-router-dom";
import { paths } from "../consts/paths";
import { customError } from "../utils/errors";
import { registerSchemaValues } from "../Schemas/registerSchema";

export function useRegister() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();

    const register = async (
        registerData: registerSchemaValues
    ): Promise<UserAuth> => {
        const getData = localStorage.getItem(DATABASE_KEY);

        if (!getData)
            throw customError({
                code: "DB_ERROR",
                message: "Ha habido un error al recuperar los datos...",
            });

        const data: BBDD = JSON.parse(getData);

        const users = data.users;
        console.log(users);
        const user = users.find((u) => u.username === registerData.username);

        if (user)
            throw customError({
                code: "USERNAME_TAKEN",
                message: "El nombre de usuario ya existe. Pruebe con otro.",
            });

        const emailFound = users.find((u) => u.email === registerData.email);

        if (emailFound)
            throw customError({
                code: "EMAIL_ALREADY_USED",
                message: "El email introducido ya está en uso.",
            });

        const newUser: User = {
            username: registerData.username,
            password: registerData.password,
            email: registerData.email,
            elo: registerData.elo || null,
            title:
                registerData.title === "Sin título" ? null : registerData.title,
            isFirstLogin: true,
            userID: users.map((u) => u.userID).sort((a, b) => b - a)[0] + 1,
            defaultCourses: [
                { courseId: 1, progress: 0 },
                { courseId: 2, progress: 0 },
                { courseId: 3, progress: 0 },
                { courseId: 4, progress: 0 },
                { courseId: 5, progress: 0 },
                { courseId: 6, progress: 0 },
                { courseId: 7, progress: 0 },
            ],
            courses: [],
        };

        const newData: BBDD = { ...data, users: [...users, { ...newUser }] };

        localStorage.setItem(DATABASE_KEY, JSON.stringify(newData));

        return {
            username: newUser.username,
            userID: newUser.userID,
            firstLogin: newUser.isFirstLogin,
        };
    };

    return useMutation<UserAuth, CustomError, registerSchemaValues>({
        mutationFn: register,
        onSuccess: (data: UserAuth) => {
            localStorage.setItem(USER_AUTH_KEY, JSON.stringify(data));
            setUser(data);
            navigate(`/${paths.dashboard}`);
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
