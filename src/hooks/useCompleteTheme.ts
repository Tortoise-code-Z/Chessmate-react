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
    getUserDefaultCourse,
    getUserDefaultCourses,
    getUsers,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";

type Variables = {
    themeID: number;
    courseID: number;
    userID: number;
};

export function useCompleteTheme(
    index: number,
    setIndex: Dispatch<SetStateAction<number>>
) {
    const queryClient = useQueryClient();
    const {
        setState: setFeedbackState,
        setMsg,
        setType,
    } = useFeedbackMessageStore();

    const completeTheme = async ({ courseID, themeID, userID }: Variables) => {
        try {
            const data = getDataLocalStorage(DATABASE_KEY);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const userDefaultCourse = getUserDefaultCourse(
                userID,
                courseID,
                data
            );
            const userDefaultCourses = getUserDefaultCourses(userID, data);
            const users = getUsers(data);

            const newCourseData = {
                ...userDefaultCourse,
                themes: userDefaultCourse?.themes.map((theme) =>
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
                    user.userID === userID
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
            console.error(error);
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
                        o.curseID === data.courseId
                            ? { ...o, progress: data.progress }
                            : o
                    );
                }
            );
        },
        onError: (error) => {
            console.log(error);
            setFeedbackState(true);
            setMsg("Error al completar el tema");
            setType("error");
        },
    });
}
