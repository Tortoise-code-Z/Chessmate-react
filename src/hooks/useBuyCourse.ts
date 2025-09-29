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
    getUserById,
    getUserObtainedCourses,
    setItemLocalStorage,
} from "../api";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { useLocation } from "react-router-dom";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_COURSE_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
    ERROR_GET_USER_MSG,
} from "../consts/api";

type BuyCourseApi = {
    course: CourseJSON;
    userID: number | undefined;
};

type Variables = {
    courseID: number | undefined;
    userID: number | undefined;
};

/**
 * useBuyCourse - Custom React hook for purchasing a course.
 *
 * This hook:
 * - Uses React Query's `useMutation` to perform the course purchase operation.
 * - Updates local storage with the new user course progress structure.
 * - Updates multiple query caches to reflect the purchase across the app.
 * - Interacts with `useFeedbackMessageStore` for showing success/error messages.
 * - Validates the presence of user and course before allowing the purchase.
 *
 * @returns A mutation object from `useMutation` with properties:
 * - `mutate` function to trigger the course purchase.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Handles `onSuccess` and `onError` callbacks automatically.
 */

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
            const data = getDataLocalStorage<BBDD>(DATABASE_KEY);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);

            const user = getUserById(userID, data);
            if (!user && userID) throw new Error(ERROR_GET_USER_MSG);

            const userCourses = getUserObtainedCourses(
                userID,
                data
            ) as ObtainedCourse[];

            const course = getCourseById(data, courseID);
            if (!course) throw new Error(ERROR_GET_COURSE_MSG);

            const newUserCourses: ObtainedCourse[] = [
                {
                    courseId: courseID,
                    progress: 0,
                    themes: course.content.themes.map((t) => {
                        return {
                            themeID: t.id,
                            completed: false,
                            subthemes: t.content.map((tt) => {
                                return {
                                    subthemeID: tt.id,
                                    completed: false,
                                };
                            }),
                        };
                    }),
                },
                ...userCourses,
            ];

            const newData: BBDD = {
                ...data,
                users: data.users.map((u) =>
                    u.userID === userID ? { ...u, courses: newUserCourses } : u
                ),
            };

            const getCourse = newData.courses.find(
                (c) => c.courseID === courseID
            );

            if (!getCourse) throw new Error(ERROR_GET_COURSE_MSG);

            setItemLocalStorage<BBDD>(DATABASE_KEY, newData);

            return {
                userID: userID,
                course: getCourse,
            };
        } catch (error) {
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

            queryClient.setQueryData<(CourseJSON & IsObtainedCourse)[]>(
                ["toBuyCourses", data.userID],
                (old) => {
                    if (!old) return old;

                    console.log(
                        "first",
                        old.map((o) =>
                            o.courseID === data.course.courseID
                                ? { ...o, isObtained: true }
                                : o
                        )
                    );

                    return old.map((o) =>
                        o.courseID === data.course.courseID
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
                        o.courseID === data.course.courseID
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
                        o.courseID === data.course.courseID
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
                        o.courseID === data.course.courseID
                            ? { ...o, isObtained: true }
                            : o
                    );
                }
            );

            queryClient.setQueryData<CourseJSON & IsObtainedCourse>(
                ["bannerCourse", data.userID],
                (old) => {
                    if (!old) return old;
                    if (old.courseID === data.course.courseID)
                        return { ...old, isObtained: true };
                    return old;
                }
            );

            queryClient.setQueryData<CourseJSON & IsObtainedCourse>(
                ["useCourse", data.course.courseID, data.userID],
                (old) => {
                    if (!old) return old;
                    if (old.courseID === data.course.courseID)
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
