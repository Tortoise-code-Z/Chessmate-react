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
 * useCompleteThemeOC - Custom React hook for marking a subtheme as completed in an obtained course.
 *
 * This hook:
 * - Uses React Query's `useMutation` to update subtheme completion status.
 * - Updates local storage with the new progress for the user's obtained course.
 * - Updates query caches to reflect subtheme completion and course progress.
 * - Interacts with `useFeedbackMessageStore` for showing success/error messages.
 * - Resets the video display after marking completion.
 * - Automatically calculates the course progress based on completed themes and subthemes.
 *
 * @param courseID - ID of the course being updated.
 * @param userID - ID of the user completing the subtheme.
 * @param setShowVideo - State setter function to control currently displayed video.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger subtheme completion.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Handles `onSuccess` and `onError` callbacks automatically.
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
