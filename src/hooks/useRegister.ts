import { useMutation } from "@tanstack/react-query";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { BBDD, CustomError, User, UserAuth } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useNavigate } from "react-router-dom";
import { paths } from "../consts/paths";
import { customError } from "../utils/errors";
import { registerSchemaValues } from "../Schemas/registerSchema";
import {
    getDataLocalStorage,
    getDefaultCourses,
    getEmail,
    getUserByUsername,
    getUsers,
    orderedMayorToMenorByKey,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";

export function useRegister() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();
    const {
        setState: setFeedbackState,
        setMsg,
        setType,
    } = useFeedbackMessageStore();
    const register = async (
        registerData: registerSchemaValues
    ): Promise<UserAuth> => {
        const data = getDataLocalStorage(DATABASE_KEY);

        if (!data)
            throw customError({
                code: "DB_ERROR",
                message: "Ha habido un error al recuperar los datos...",
            });

        const user = getUserByUsername(registerData.username, data);

        if (user)
            throw customError({
                code: "USERNAME_TAKEN",
                message: "El nombre de usuario ya existe. Pruebe con otro.",
            });

        const emailFound = getEmail(data, registerData.email);

        if (emailFound)
            throw customError({
                code: "EMAIL_ALREADY_USED",
                message: "El email introducido ya está en uso.",
            });

        const defaultCourses = getDefaultCourses(data);
        const users = getUsers(data);
        const orderedUsers = orderedMayorToMenorByKey(users, "userID");
        const newUserId = orderedUsers[0].userID + 1;

        const newUser: User = {
            username: registerData.username,
            password: registerData.password,
            email: registerData.email,
            elo: registerData.elo || null,
            title:
                registerData.title === "Sin título" ? null : registerData.title,
            isFirstLogin: true,
            userID: newUserId,
            defaultCourses: defaultCourses.map((df) => ({
                courseId: df.curseID,
                progress: 0,
                themes: df.content.themes.map((t) => ({
                    themeID: t.id,
                    completed: false,
                })),
            })),
            courses: [],
        };

        const newData: BBDD = { ...data, users: [...users, { ...newUser }] };

        setItemLocalStorage<BBDD>(DATABASE_KEY, newData);

        return {
            username: newUser.username,
            userID: newUser.userID,
            firstLogin: newUser.isFirstLogin,
        };
    };

    return useMutation<UserAuth, CustomError, registerSchemaValues>({
        mutationFn: register,
        onSuccess: (data: UserAuth) => {
            setItemLocalStorage<UserAuth>(USER_AUTH_KEY, data);
            setUser(data);
            navigate(`/${paths.dashboard}`);
        },
        onError: (error) => {
            console.log(error);
            setFeedbackState(true);
            setMsg(error.message);
            setType("error");
        },
    });
}
