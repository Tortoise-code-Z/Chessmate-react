import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    IsObtainedCourse,
    ObtainedCourse,
} from "../types/types";
import { DATABASE_KEY } from "../consts/dataBaseKey";
import {
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";

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

    const {
        setState: setFeedbackState,
        setMsg,
        setType,
        setPath,
    } = useFeedbackMessageStore();

    const location = useLocation();

    const buyCourse = async ({
        courseID,
        userID,
    }: Variables): Promise<BuyCourseApi> => {
        try {
            const data = getDataLocalStorage(DATABASE_KEY);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const userCourses = getUserObtainedCourses(userID, data);

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

            setItemLocalStorage<BBDD>(DATABASE_KEY, newData);
            const course = getCourseById(data, courseID);

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
            setFeedbackState(true);
            setPath(location.pathname);
            setMsg("¡¡Compra realizada con éxito!!");
            setType("success");

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
            setFeedbackState(true);
            setPath(location.pathname);
            setMsg("Error al realizar la compra");
            setType("error");
        },
    });
}
