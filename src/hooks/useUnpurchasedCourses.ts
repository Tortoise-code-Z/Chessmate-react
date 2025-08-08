import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON } from "../types/types";

export default function useUnpurchasedCourses(
    key: string,
    limit: number,
    userID?: number
) {
    const queryFunction: () => Promise<CourseJSON[]> = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const courses = data.courses.sort(
                (a, b) => (b.sales as number) - (a.sales as number)
            );

            if (userID) {
                const userCoursesIds =
                    data.users
                        .find((u) => u.userID === userID)
                        ?.courses.map((item) => {
                            const { progress, ...rest } = item;
                            return rest.courseId;
                        }) || ([] as number[]);

                const finalCourses = courses.filter((c) => {
                    for (
                        let index = 0;
                        index < userCoursesIds.length;
                        index++
                    ) {
                        const element = userCoursesIds[index];
                        if (element === c.curseID) return false;
                    }

                    return true;
                });

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
