import { useQuery } from "@tanstack/react-query";
import { Comments } from "../types/types";
import {
    deleteKey,
    getComments,
    getDataLocalStorage,
    getUserById,
} from "../api";

/**
 * useCourseComments - Custom React hook to fetch comments for a specific course.
 *
 * This hook:
 * - Retrieves course data from local storage using a provided key.
 * - Maps over the comments, attaching the corresponding user information.
 * - Filters comments by the given course ID.
 * - Sorts comments chronologically by `createdAt` (oldest first).
 * - Returns a React Query `useQuery` object with `data`, `isLoading`, `error`, etc.
 *
 * @param key - Local storage key to fetch course and comment data.
 * @param courseID - The ID of the course for which to fetch comments.
 * @returns A React Query object containing comments and query status.
 */

export default function useCourseComments(
    key: string,
    courseID: number | undefined
) {
    const queryFunction: () => Promise<Comments[]> = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            if (!courseID)
                throw new Error(
                    "Ha habido un error al recuperar el ID del curso..."
                );

            const dataComments = getComments(data);

            const comments = dataComments.map((c) => {
                const user = getUserById(c.idUser, data);
                if (!user)
                    throw new Error(
                        "Ha habido un error al recuperar los datos..."
                    );
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
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["courseComments", courseID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
