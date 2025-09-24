import { useQuery } from "@tanstack/react-query";
import { getDataLocalStorage, getUserObtainedCourses } from "../api";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
} from "../consts/api";
import { BBDD } from "../types/types";

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
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);
            if (!userID) throw new Error(ERROR_GET_USER_ID_MSG);

            const userCourses = getUserObtainedCourses(userID, data);
            const haveCourse = userCourses?.some(
                (course) => course.courseId === courseID
            );

            return !!haveCourse;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["haveCourse", userID, courseID],
        queryFn: queryFunction,
    });
}
