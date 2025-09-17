import { useQuery } from "@tanstack/react-query";
import { AuthorCurseData, Course, IsObtainedCourse } from "../types/types";
import {
    getAuthors,
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";
import { isNumber } from "../utils/general";

/**
 * useCourse - Custom hook to fetch detailed information about a single course.
 *
 * This hook retrieves course data from local storage, enriches it with author details,
 * and optionally marks whether the course has been obtained by a specific user.
 *
 * @param key - The local storage key where course and user data is stored.
 * @param courseID - The ID of the course to fetch.
 * @param userID - Optional user ID to determine if the user has obtained this course.
 *
 * @returns A React Query object containing:
 *  - `data`: The course object with `authors` populated and `isObtained` flag.
 *  - `isLoading`: Whether the query is currently loading.
 *  - `error`: Any error encountered while fetching.
 *  - `refetch`: Function to manually refetch the course data.
 *
 * @remarks
 * - Fetches course authors from the stored data and maps them into `authors`.
 * - Sets `isObtained` to `true` if the user has already obtained the course.
 * - Cached for 5 minutes (`staleTime`) to avoid unnecessary reads.
 *
 */

export default function useCourse(
    key: string,
    courseID: number | undefined,
    userID?: number
) {
    const queryFunction: () => Promise<
        Course & IsObtainedCourse
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            if (!courseID && !isNumber(courseID))
                throw new Error(
                    "Ha habido un error al recuperar el ID del curso..."
                );

            if (userID && !isNumber(userID))
                throw new Error(
                    "Ha habido un error al recuperar el ID del usuario..."
                );

            const obtainedCourse = getCourseById(data, courseID);

            const authors = getAuthors(data);

            const courseAuthorsData = obtainedCourse.authors.map(
                (courseAuthorID) =>
                    authors.find((author) => author.id === courseAuthorID) ||
                    ({} as AuthorCurseData)
            );

            const userCourses = getUserObtainedCourses(userID, data);

            return {
                ...obtainedCourse,
                authors: [...courseAuthorsData],
                isObtained: userCourses?.some(
                    (course) => course.courseId === obtainedCourse.curseID
                ),
            };
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const query = useQuery({
        queryKey: ["useCourse", courseID, userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });

    return query;
}
