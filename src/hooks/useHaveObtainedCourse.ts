import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserObtainedCourses } from "../api";
import { useEffect } from "react";
import { useFeedbackMessageStore } from "./useFeedbackMesssageStore";
import { PATHS } from "../consts/paths";

/**
 * Custom hook to check if a user has obtained a specific course.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves course data from local storage using the provided `key`.
 * - Checks if the user with `userID` has obtained the course with `courseID`.
 * - Triggers a feedback message via `useFeedbackMessageStore` if the user hasn't obtained the course.
 *
 * @param courseID The ID of the course to check.
 * @param userID The ID of the user whose courses are being checked.
 * @param key The local storage key where user course data is stored.
 *
 * @returns React Query's query object containing `data` (boolean), `isLoading`, `error`, etc.
 */

export default function useHaveObtainedCourse(
    courseID: number,
    userID: number,
    key: string
) {
    const { setPath, setReset } = useFeedbackMessageStore();

    const queryFunction = async (): Promise<boolean> => {
        const data = getDataLocalStorage(key);
        if (!data)
            throw new Error("Ha habido un problema al recuperar los datos...");

        const userCourses = getUserObtainedCourses(userID, data);

        const haveCourse = userCourses.some(
            (course) => course.courseId === courseID
        );

        return haveCourse;
    };

    const { setMsg, setState, setType } = useFeedbackMessageStore();

    const query = useQuery({
        queryKey: ["haveCourse", userID, courseID],
        queryFn: queryFunction,
    });

    useEffect(() => {
        if (query.isSuccess && !query.data) {
            setType("error");
            setMsg("Para acceder al curso primero debes comprarlo...");
            setState(true);
            setReset(false);
            setPath(
                `/${PATHS.coursesDetail.replace(":id", courseID.toString())}`
            );
        }
    }, [query.isSuccess, query.data, setType, setMsg, setState]);

    return query;
}
