import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, IsObtainedCourse } from "../types/types";
import { getCourses, getUserObtainedCourses } from "../api";

export default function useBestSeller(
    key: string,
    limit: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const courses = getCourses(data);
            const userCourses = getUserObtainedCourses(userID, data);

            const filteredCourses = courses
                .sort((a, b) => (b.sales as number) - (a.sales as number))
                .slice(0, limit);

            return filteredCourses.map((fc) => ({
                ...fc,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === fc.curseID
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
