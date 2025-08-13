import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    IsObtainedCourse,
    ObtainedCourse,
} from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import { useErrorStore } from "./useErrorStore";
import { useSuccessStore } from "./useSuccessStore";

type BuyCourseApi = {
    course: CourseJSON;
    userID: number;
};

type Variables = {
    courseID: number;
    userID: number;
};

export function useBuyCourse() {
    const queryClient = useQueryClient();

    const { setState: setSuccessState, setSuccessMsg } = useSuccessStore();
    const { setState: setErrorState, setErrorMsg } = useErrorStore();

    const buyCourse = async ({
        courseID,
        userID,
    }: Variables): Promise<BuyCourseApi> => {
        try {
            const getData = localStorage.getItem(DATABASE_KEY);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const userCourses = data.users.find((u) => u.userID === userID)
                ?.courses as ObtainedCourse[];

            const newUserCourses: ObtainedCourse[] = [
                { courseId: courseID, progress: 0 },
                ...userCourses,
            ];

            const newData: BBDD = {
                ...data,
                users: data.users.map((u) =>
                    u.userID === userID ? { ...u, courses: newUserCourses } : u
                ),
            };

            localStorage.setItem(DATABASE_KEY, JSON.stringify(newData));

            const course =
                data.courses.find((c) => c.curseID === courseID) ||
                ({} as CourseJSON);

            return {
                userID: userID,
                course: course,
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useMutation<BuyCourseApi, Error, Variables>({
        mutationFn: buyCourse,
        onSuccess: (data: BuyCourseApi) => {
            setSuccessState(true);
            setSuccessMsg("¡¡Compra realizada con éxito!!");

            queryClient.invalidateQueries({
                queryKey: ["courses"],
                exact: false,
            });

            queryClient.setQueryData<CourseJSON[]>(
                ["toBuyCourses", data.userID],
                (old) => {
                    if (!old) return old;
                    return old.map((o) =>
                        o.curseID === data.course.curseID
                            ? { ...o, isObtained: true }
                            : o
                    );
                }
            );

            queryClient.setQueryData<(CourseJSON & IsObtainedCourse)[]>(
                ["bestSellers", data.userID],
                (old) => {
                    if (!old) return old;
                    return old.map((o) =>
                        o.curseID === data.course.curseID
                            ? { ...o, isObtained: true }
                            : o
                    );
                }
            );

            queryClient.setQueryData<(CourseJSON & IsObtainedCourse)[]>(
                ["recentCourses", data.userID],
                (old) => {
                    if (!old) return old;
                    return old.map((o) =>
                        o.curseID === data.course.curseID
                            ? { ...o, isObtained: true }
                            : o
                    );
                }
            );

            queryClient.setQueriesData<(CourseJSON & IsObtainedCourse)[]>(
                { queryKey: ["allCourses"], exact: false },
                (old) => {
                    if (!old) return old;
                    return old.map((o) =>
                        o.curseID === data.course.curseID
                            ? { ...o, isObtained: true }
                            : o
                    );
                }
            );

            queryClient.setQueryData<CourseJSON & IsObtainedCourse>(
                ["bannerCourse", data.userID],
                (old) => {
                    if (!old) return old;
                    if (old.curseID === data.course.curseID)
                        return { ...old, isObtained: true };
                    return old;
                }
            );

            queryClient.setQueryData<CourseJSON & IsObtainedCourse>(
                ["useCourse", data.course.curseID, data.userID],
                (old) => {
                    if (!old) return old;
                    if (old.curseID === data.course.curseID)
                        return { ...old, isObtained: true };
                    return old;
                }
            );
        },
        onError: (error) => {
            console.error(error);
            setErrorState(true);
            setErrorMsg("Error al realizar la compra");
        },
    });
}
