import { useQuery } from "@tanstack/react-query";
import { CourseJSON, Progress } from "../types/types";
import {
    deleteKey,
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";

/**
 * Custom hook to fetch the list of courses a user has already obtained.
 *
 * - Retrieves user data from local storage.
 * - Maps each obtained course to include full course information.
 * - Optionally excludes a specific course (`currentCourseID`) and limits the number of courses returned.
 *
 * @param key - The localStorage key to fetch the database from.
 * @param userId - The ID of the user whose obtained courses are fetched.
 * @param limit - Optional maximum number of courses to return.
 * @param currentCourseID - Optional course ID to exclude from the results.
 * @returns A `react-query` object containing `data`, `isLoading`, `error`, etc.
 */

export default function useObtainedCourses(
    key: string,
    userId: number,
    limit?: number,
    currentCourseID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & Progress)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const userCourses = getUserObtainedCourses(userId, data);

            let mappingUserCourses = userCourses.map((uc) => {
                const id = uc.courseId;
                const course = getCourseById(data, id);
                const rest = deleteKey(uc, "courseId");

                return { ...course, ...rest };
            });

            if (currentCourseID) {
                mappingUserCourses = mappingUserCourses.filter(
                    (c) => c.curseID !== currentCourseID
                );
            }

            return mappingUserCourses.slice(
                0,
                limit ?? mappingUserCourses.length
            );
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["courses", limit, currentCourseID],
        queryFn: queryFunction,
    });
}
