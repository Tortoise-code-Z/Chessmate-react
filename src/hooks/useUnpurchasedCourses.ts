import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON } from "../types/types";
import axios from "axios";

export default function useUnpurchasedCourses(
    url: string,
    limit: number,
    userID?: number
) {
    const queryFunction: () => Promise<CourseJSON[]> = async () => {
        const response = await axios.get<BBDD>(url);

        const courses = response.data.courses.sort(
            (a, b) => (b.sales as number) - (a.sales as number)
        );

        if (userID) {
            const userCoursesIds =
                response.data.users
                    .find((u) => u.userID === userID)
                    ?.courses.map((item) => {
                        const { progress, ...rest } = item;
                        return rest.courseId;
                    }) || ([] as number[]);

            const finalCourses = courses.filter((c) => {
                for (let index = 0; index < userCoursesIds.length; index++) {
                    const element = userCoursesIds[index];
                    if (element === c.curseID) return false;
                }

                return true;
            });

            return finalCourses.slice(0, limit);
        }

        return courses.slice(0, limit);
    };

    return useQuery({
        queryKey: ["toBuyCourses", userID],
        queryFn: queryFunction,
    });
}
