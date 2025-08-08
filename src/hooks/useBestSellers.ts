import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    IsObtainedCourse,
    ObtainedCourse,
} from "../types/types";

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

            const courses = data.courses;

            const userCourses =
                data.users.find((u) => u.userID === userID)?.courses ||
                ([] as ObtainedCourse[]);

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
