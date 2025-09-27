import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    IsObtainedCourse,
    ObtainedCourse,
    VideoData,
} from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import {
    getDataLocalStorage,
    getUserObtainedCourse,
    getUserObtainedCourses,
    getUsers,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";
import { useCourseClassroomApi } from "./useCourseClassroom";
import { Dispatch, SetStateAction } from "react";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_COURSE_MSG,
    ERROR_GET_COURSES_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_SUBTHEME_ID_MSG,
    ERROR_GET_THEME_ID_MSG,
    ERROR_GET_USER_ID_MSG,
} from "../consts/api";

type Variables = {
    subThemeID: number | undefined;
    themeID: number | undefined;
    courseID: number | undefined;
    userID: number | undefined;
};

/**
 * useCompleteTheme - Custom hook to mark a theme as completed for a user in a default course.
 *
 * This hook handles updating the user's progress for a specific theme, persisting the change
 * in local storage, and updating React Query caches for reactive UI updates. It also provides
 * feedback in case of errors.
 *
 * @param index - Current theme index, used to update the active theme after completion.
 * @param setIndex - State setter function to update the theme index.
 *
 * @returns A mutation object from React Query, including `mutate` and `mutateAsync` functions
 *          to trigger theme completion, along with status flags like `isLoading`, `isError`, `isSuccess`.
 *
 * @remarks
 * - Updates the theme's `completed` property to `true`.
 * - Recalculates course progress based on completed themes.
 * - Persists the updated course data to localStorage under `DATABASE_KEY`.
 * - Updates related React Query caches for `defaultCourseById` and `defaultCourses`.
 * - Displays an error feedback message if the mutation fails.
 */

export function useCompleteThemeOC(
    courseID: number | undefined,
    userID: number | undefined,
    setShowVideo: Dispatch<SetStateAction<VideoData | null>>
) {
    const queryClient = useQueryClient();

    const {
        setState: setFeedbackState,
        setMsg,
        setType,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    const completeTheme = async ({
        courseID,
        subThemeID,
        themeID,
        userID,
    }: Variables) => {
        try {
            const data = getDataLocalStorage<BBDD>(DATABASE_KEY);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);
            if (!subThemeID) throw new Error(ERROR_GET_SUBTHEME_ID_MSG);
            if (!themeID) throw new Error(ERROR_GET_THEME_ID_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);

            const userCourse = getUserObtainedCourse(userID, courseID, data);
            if (!userCourse) throw new Error(ERROR_GET_COURSE_MSG);

            const userCourses = getUserObtainedCourses(userID, data);
            if (!userCourses) throw new Error(ERROR_GET_COURSES_MSG);

            const users = getUsers(data);

            const newCourseData = {
                ...userCourse,
                themes: userCourse.themes?.map((theme) => {
                    const subthemes = theme.subthemes.map((subtheme) =>
                        subtheme.subthemeID === subThemeID &&
                        theme.themeID === themeID
                            ? { ...subtheme, completed: true }
                            : subtheme
                    );

                    if (subthemes.every((s) => s.completed)) {
                        return {
                            ...theme,
                            subthemes: subthemes,
                            completed: true,
                        };
                    }

                    return { ...theme, subthemes: subthemes };
                }),
            };

            const finalCourseData = {
                ...newCourseData,
                progress:
                    (newCourseData.themes?.filter((theme) => theme.completed)
                        .length /
                        newCourseData.themes.length) *
                    100,
            };

            const newData: BBDD = {
                ...data,
                users: users.map((user) =>
                    user.userID === userID
                        ? {
                              ...user,
                              courses: userCourses.map((course) =>
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

    return useMutation<ObtainedCourse, Error, Variables>({
        mutationFn: completeTheme,
        onSuccess: (data: ObtainedCourse) => {
            queryClient.setQueryData<useCourseClassroomApi>(
                ["useCourseClassroom", courseID, userID],
                (oldData) => {
                    if (!oldData) return oldData;
                    return {
                        ...oldData,
                        themes: data.themes,
                    };
                }
            );

            queryClient.setQueriesData<(CourseJSON & IsObtainedCourse)[]>(
                { queryKey: ["courses", courseID], exact: false },
                (oldData) => {
                    if (!oldData) return oldData;

                    return oldData.map((o) =>
                        o.courseID === courseID
                            ? { ...o, progress: data.progress }
                            : o
                    );
                }
            );

            setShowVideo(null);
            setFeedbackState(true);
            setPath(location.pathname);
            setMsg("Tema completado");
            setType("success");
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
