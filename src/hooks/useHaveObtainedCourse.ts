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
    courseID: number | undefined,
    userID: number | undefined,
    key: string
) {
    const queryFunction = async (): Promise<boolean> => {
        const data = getDataLocalStorage(key);

        if (!data)
            throw new Error("Ha habido un problema al recuperar los datos...");

        if (!courseID)
            throw new Error("Ha habido un problema al recuperar los datos...");

        if (!userID)
            throw new Error("Ha habido un problema al recuperar los datos...");

        const userCourses = getUserObtainedCourses(userID, data);
        const haveCourse = userCourses?.some(
            (course) => course.courseId === courseID
        );

        return !!haveCourse;
    };

    const query = useQuery({
        queryKey: ["haveCourse", userID, courseID],
        queryFn: queryFunction,
    });

    return query;
}
