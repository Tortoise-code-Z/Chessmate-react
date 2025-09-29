import { useMutation } from "@tanstack/react-query";
import { DATABASE_KEY, USER_AUTH_KEY } from "../consts/dataBaseKey";
import { BBDD, CustomError, User, UserAuth } from "../types/types";
import { useUserAuthStore } from "./UseUserAuthStore";
import { useLocation, useNavigate } from "react-router-dom";
import { PATHS } from "../consts/paths";
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
import {
    ERROR_EMAIL_EXIST_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_USER_TAKEN_MSG,
} from "../consts/api";

/**
 * useRegister - Custom React hook for registering a new user.
 *
 * This hook:
 * - Uses React Query's `useMutation` to handle user registration.
 * - Validates that the username and email are unique before creating a user.
 * - Generates a new user ID and sets default courses for first-time users.
 * - Updates local storage with the new user and user authentication info.
 * - Interacts with global state stores:
 *    - `useUserAuthStore` to set the authenticated user.
 *    - `useFeedbackMessageStore` to display success/error messages.
 * - Navigates to the dashboard upon successful registration.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger the registration process.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles `onSuccess` (navigate & store user) and `onError` (show feedback) callbacks.
 */

export function useRegister() {
    const { setUser } = useUserAuthStore();
    const navigate = useNavigate();
    const {
        setState: setFeedbackState,
        setMsg,
        setType,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    const register = async (
        registerData: registerSchemaValues
    ): Promise<UserAuth> => {
        try {
            const data = getDataLocalStorage<BBDD>(DATABASE_KEY);

            if (!data)
                throw customError({
                    code: "DB_ERROR",
                    message: ERROR_GET_DATA_MSG,
                });

            const user = getUserByUsername(registerData.username, data);

            if (user)
                throw customError({
                    code: "USERNAME_TAKEN",
                    message: ERROR_USER_TAKEN_MSG,
                });

            const emailFound = getEmail(data, registerData.email);

            if (emailFound)
                throw customError({
                    code: "EMAIL_ALREADY_USED",
                    message: ERROR_EMAIL_EXIST_MSG,
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
                    registerData.title === "Sin título"
                        ? null
                        : registerData.title,
                isFirstLogin: true,
                userID: newUserId,
                defaultCourses: defaultCourses.map((df) => ({
                    courseId: df.courseID,
                    progress: 0,
                    themes: df.content.themes.map((t) => ({
                        themeID: t.id,
                        completed: false,
                    })),
                })),
                courses: [],
            };

            const newData: BBDD = {
                ...data,
                users: [...users, { ...newUser }],
            };

            setItemLocalStorage<BBDD>(DATABASE_KEY, newData);

            return {
                username: newUser.username,
                userID: newUser.userID,
                firstLogin: newUser.isFirstLogin,
            };
        } catch (error) {
            throw error;
        }
    };

    return useMutation<UserAuth, CustomError, registerSchemaValues>({
        mutationFn: register,
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
