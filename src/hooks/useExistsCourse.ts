import { useQuery } from "@tanstack/react-query";
import { getCourses, getDataLocalStorage } from "../api";
import { ERROR_GET_COURSE_ID_MSG, ERROR_GET_DATA_MSG } from "../consts/api";
import { BBDD } from "../types/types";

/**
 * Custom hook to check if a course exists for a user based on local storage data.
 *
 * - Uses React Query's `useQuery` to handle caching, loading, and error states.
 * - Retrieves course data from local storage using the provided `key`.
 * - Checks if a course with the specified `courseID` exists.
 * - Triggers a feedback message via `useFeedbackMessageStore` if the course is not found.
 *
 * @param courseID The ID of the course to check for existence.
 * @param key The local storage key where course data is stored.
 *
 * @returns React Query's query object containing `data` (boolean), `isLoading`, `error`, etc.
 */

export default function useCourseExists(
    courseID: number | undefined,
    key: string
) {
    const queryFunction = async (): Promise<boolean> => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);

            const courses = getCourses(data);

            const existsCourse = courses.some(
                (course) => course.curseID === courseID
            );

            return existsCourse;
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const query = useQuery({
        queryKey: ["existCourse", courseID],
        queryFn: queryFunction,
    });

    return query;
}
