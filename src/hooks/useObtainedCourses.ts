import { useQuery } from "@tanstack/react-query";
import { CourseJSON, Progress } from "../types/types";
import {
    deleteKey,
    getCourseById,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";

export default function useObtainedCourses(
    key: string,
    userId: number,
    limit: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & Progress)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const userCourses = getUserObtainedCourses(userId, data);

            const mappingUserCourses = userCourses.map((uc) => {
                const id = uc.courseId;
                const course = getCourseById(data, id);
                const rest = deleteKey(uc, "courseId");

                return { ...course, ...rest };
            });

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
        queryKey: ["courses", limit],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
