import { useQuery } from "@tanstack/react-query";
import { AuthorCurseData, Course, IsObtainedCourse } from "../types/types";
import {
    getAuthors,
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";

/**
 * useCourseClassroom - Custom hook to fetch detailed classroom data for a single course.
 *
 * This hook retrieves a course from local storage, enriches it with its authors' data,
 * and checks if the user has obtained the course.
 *
 * @param key - Local storage key where course and user data is stored.
 * @param courseID - ID of the course to fetch.
 * @param userID - Optional user ID to determine if the user has obtained this course.
 *
 * @returns A React Query object containing:
 *  - `data`: The course with `authors` populated and `isObtained` flag.
 *  - `isLoading`: Whether the query is currently loading.
 *  - `error`: Any error encountered while fetching.
 *  - `refetch`: Function to manually refetch the course data.
 *
 * @remarks
 * - Authors are mapped based on their IDs from the stored data.
 * - `isObtained` is true if the user has already obtained the course.
 * - Data is cached for 5 minutes (`staleTime`) to reduce unnecessary reads.
 *
 */

export default function useCourseClassroom(
    key: string,
    courseID: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        Course & IsObtainedCourse
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

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
            console.log(error);
            throw error;
        }
    };

    const query = useQuery({
        queryKey: ["useCourseClassroom", courseID, userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });

    return query;
}
