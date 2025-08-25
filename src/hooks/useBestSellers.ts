import { useQuery } from "@tanstack/react-query";
import { CourseJSON, IsObtainedCourse } from "../types/types";
import {
    getCourses,
    getDataLocalStorage,
    getUserObtainedCourses,
    orderedMayorToMenorByKey,
} from "../api";

export default function useBestSeller(
    key: string,
    limit: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);

            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const courses = getCourses(data);
            const userCourses = getUserObtainedCourses(userID, data);

            const filteredCourses = orderedMayorToMenorByKey(
                courses,
                "sales"
            ).slice(0, limit);

            return filteredCourses.map((course) => ({
                ...course,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === course.curseID
                ),
            }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["bestSellers", userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
