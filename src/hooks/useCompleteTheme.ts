import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    BBDD,
    DefualtCourse,
    ObtainedDefaultCourse,
    Progress,
    UseCourseApiType,
} from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { Dispatch, SetStateAction } from "react";
import {
    getDataLocalStorage,
    getUserById,
    getUserDefaultCourse,
    getUserDefaultCourses,
    getUsers,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_COURSE_MSG,
    ERROR_GET_COURSES_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
    ERROR_GET_USER_MSG,
} from "../consts/api";

type Variables = {
    themeID: number;
    courseID: number | undefined;
    userID: number | undefined;
};

/**
 * useCompleteTheme - Custom React hook for marking a theme as completed in a default course.
 *
 * This hook:
 * - Uses React Query's `useMutation` to update theme completion status.
 * - Updates local storage with the new progress for the user's default course.
 * - Updates query caches to reflect theme completion and course progress.
 * - Interacts with `useFeedbackMessageStore` for showing success/error messages.
 * - Automatically calculates the course progress based on completed themes.
 *
 * @param index - Current theme index to update the UI.
 * @param setIndex - State setter function to update the current theme index.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger theme completion.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Handles `onSuccess` and `onError` callbacks automatically.
 */

export function useCompleteTheme(
    index: number,
    setIndex: Dispatch<SetStateAction<number>>
) {
    const queryClient = useQueryClient();
    const {
        setState: setFeedbackState,
        setMsg,
        setType,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    const completeTheme = async ({ courseID, themeID, userID }: Variables) => {
        try {
            const data = getDataLocalStorage<BBDD>(DATABASE_KEY);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);

            const user = getUserById(userID, data);
            if (!user && userID) throw new Error(ERROR_GET_USER_MSG);

            const userDefaultCourse = getUserDefaultCourse(
                userID,
                courseID,
                data
            );
            if (!userDefaultCourse) throw new Error(ERROR_GET_COURSE_MSG);

            const userDefaultCourses = getUserDefaultCourses(userID, data);
            if (!userDefaultCourses) throw new Error(ERROR_GET_COURSES_MSG);

            const users = getUsers(data);

            const newCourseData = {
                ...userDefaultCourse,
                themes: userDefaultCourse?.themes?.map((theme) =>
                    theme.themeID === themeID
                        ? { ...theme, completed: true }
                        : theme
                ),
            };

            const finalCourseData = {
                ...newCourseData,
                progress:
                    (newCourseData.themes?.filter((theme) => theme.completed)
                        .length /
                        newCourseData?.themes.length) *
                    100,
            };

            const newData: BBDD = {
                ...data,
                users: users.map((user) =>
                    user?.userID === userID
                        ? {
                              ...user,
                              defaultCourses: userDefaultCourses.map((course) =>
                                  course.courseId === courseID
                                      ? finalCourseData
                                      : course
                              ),
                          }
                        : user
                ),
            };

            setItemLocalStorage<BBDD>(DATABASE_KEY, newData);
            return finalCourseData;
        } catch (error) {
            throw error;
        }
    };

    return useMutation<ObtainedDefaultCourse, Error, Variables>({
        mutationFn: completeTheme,
        onSuccess: (data: ObtainedDefaultCourse) => {
            setIndex(
                data.themes.filter((u) => !u.completed)[0]?.themeID || index
            );

            queryClient.setQueryData<UseCourseApiType>(
                ["defaultCourseById", data.courseId],
                (oldData) => {
                    if (!oldData) return oldData;
                    return {
                        ...oldData,
                        userThemeStates: data.themes,
                    };
                }
            );

            queryClient.setQueryData<(DefualtCourse & Progress)[]>(
                ["defaultCourses"],
                (oldData) => {
                    if (!oldData) return oldData;

                    return oldData.map((o) =>
                        o.courseID === data.courseId
                            ? { ...o, progress: data.progress }
                            : o
                    );
                }
            );
        },
        onError: (error) => {
            console.error(error);
            setFeedbackState(true);
            setPath(location.pathname);
            setMsg("Error al completar el tema");
            setType("error");
        },
    });
}
