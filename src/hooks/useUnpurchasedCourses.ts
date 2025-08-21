import { useQuery } from "@tanstack/react-query";
import { CourseJSON } from "../types/types";
import {
    deleteKey,
    getDataLocalStorage,
    getUserById,
    orderedMayorToMenorByKey,
} from "../api";

export default function useUnpurchasedCourses(
    key: string,
    limit: number,
    userID?: number
) {
    const queryFunction: () => Promise<CourseJSON[]> = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const courses = orderedMayorToMenorByKey(data.courses, "sales");

            if (userID) {
                const user = getUserById(userID, data);
                if (!user)
                    throw new Error(
                        "Ha habido un error al recuperar los datos..."
                    );

                const userCoursesIds = user.courses.map((item) => {
                    const rest = deleteKey(item, "progress");
                    return rest.courseId;
                });

                const finalCourses =
                    userCoursesIds.length > 0
                        ? courses.filter((c) =>
                              userCoursesIds.some((uc) => uc === c.curseID)
                          )
                        : courses;

                return finalCourses.slice(0, limit);
            }

            return courses.slice(0, limit);
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["toBuyCourses", userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
