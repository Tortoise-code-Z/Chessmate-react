import { useQuery } from "@tanstack/react-query";
import { BBDD, Course } from "../types/types";
import axios from "axios";

export default function useUnpurchasedCourses(
    url: string,
    userID: number,
    limit: number
) {
    const queryFunction: () => Promise<Course[]> = async () => {
        const response = await axios.get<BBDD>(url);

        const courses = response.data.courses;

        const userCoursesIds = response.data.users
            .find((u) => u.userID === userID)
            ?.courses.map((item) => {
                const { progress, ...rest } = item;
                return rest.courseId;
            }) as number[];

        const finalCourses = courses.filter((c) => {
            for (let index = 0; index < userCoursesIds.length; index++) {
                const element = userCoursesIds[index];
                if (element === c.curseID) return false;
            }
            return true;
        });

        return finalCourses.splice(0, limit);
    };

    return useQuery({
        queryKey: ["toBuyCourses"],
        queryFn: queryFunction,
    });
}
