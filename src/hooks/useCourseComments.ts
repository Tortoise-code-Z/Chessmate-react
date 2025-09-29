import { useQuery } from "@tanstack/react-query";
import { BBDD, Comments } from "../types/types";
import {
    deleteKey,
    getComments,
    getDataLocalStorage,
    getUserById,
} from "../api";
import {
    ERROR_GET_COURSE_ID_MSG,
    ERROR_GET_DATA_MSG,
    ERROR_GET_USER_ID_MSG,
} from "../consts/api";

/**
 * useCourseComments - Custom React hook for fetching comments for a specific course.
 *
 * This hook:
 * - Uses React Query's `useQuery` to fetch comments from local storage.
 * - Retrieves user information for each comment.
 * - Filters comments by the given course ID.
 * - Sorts comments by creation date in ascending order.
 * - Handles errors for missing data, course ID, or user ID.
 *
 * @param key - Local storage key to fetch the database from.
 * @param courseID - ID of the course to fetch comments for.
 *
 * @returns A query object from `useQuery` with properties:
 * - `data` containing an array of comments with associated user data.
 * - `isLoading`, `isError`, `isSuccess` flags.
 * - Automatically handles caching and stale-time management.
 */

export default function useCourseComments(
    key: string,
    courseID: number | undefined
) {
    const queryFunction: () => Promise<Comments[]> = async () => {
        try {
            const data = getDataLocalStorage<BBDD>(key);

            if (!data) throw new Error(ERROR_GET_DATA_MSG);
            if (!courseID) throw new Error(ERROR_GET_COURSE_ID_MSG);

            const dataComments = getComments(data);

            const comments = dataComments.map((c) => {
                const user = getUserById(c.idUser, data);
                if (!user) throw new Error(ERROR_GET_USER_ID_MSG);

                const rest = deleteKey(c, "idUser");
                return { ...rest, user };
            });

            return comments
                .filter((comment) => comment.idCourse === courseID)
                .sort((a, b) => {
                    const bData = new Date(b.createdAt).getTime();
                    const aData = new Date(a.createdAt).getTime();
                    return aData - bData;
                });
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["courseComments", courseID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
