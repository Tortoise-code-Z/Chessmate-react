import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    BBDD,
    ObtainedCourse,
    ObtainedDefaultCourse,
    UseCourseApiType,
} from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { Dispatch, SetStateAction } from "react";

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

    const completeTheme = async ({ courseID, themeID, userID }: Variables) => {
        try {
            const getData = localStorage.getItem(DATABASE_KEY);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const courseThemeData =
                data.users
                    .find((u) => u.userID === userID)
                    ?.defaultCourses.find((df) => df.courseId === courseID) ||
                ({} as ObtainedDefaultCourse);

            const newCourseData = {
                ...courseThemeData,
                themes: courseThemeData?.themes.map((t) =>
                    t.themeID === themeID ? { ...t, completed: true } : t
                ),
            };

            const finalCourseData = {
                ...newCourseData,
                progress:
                    (newCourseData.themes?.filter((t) => t.completed).length /
                        newCourseData?.themes.length) *
                    100,
            };

            const newData: BBDD = {
                ...data,
                users: data.users.map((u) =>
                    u.userID === userID
                        ? {
                              ...u,
                              defaultCourses: u.defaultCourses.map((df) =>
                                  df.courseId === courseID
                                      ? finalCourseData
                                      : df
                              ),
                          }
                        : u
                ),
            };

            localStorage.setItem(DATABASE_KEY, JSON.stringify(newData));
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

            queryClient.setQueryData<ObtainedCourse[]>(
                ["userDefaultCourses"],
                (oldData) => {
                    if (!oldData) return oldData;

                    return oldData.map((o) =>
                        o.courseId === data.courseId
                            ? { ...o, progress: data.progress }
                            : o
                    );
                }
            );
        },
        onError: (error) => {
            console.log(error);
        },
    });
}
