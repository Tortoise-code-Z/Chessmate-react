import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, Progress } from "../types/types";
import axios from "axios";

export default function useObtainedCourses(
    url: string,
    userId: number,
    limit: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & Progress)[]
    > = async () => {
        const response = await axios.get<BBDD>(url);
        const user = response.data.users.find((u) => u.userID === userId);

        const courses = response.data.courses;
        const userCourses = user?.courses;

        const mappingUserCourses = userCourses?.map((uc) => {
            const id = uc.courseId;
            const course = courses.find((c) => c.curseID === id);

            const { courseId, ...rest } = uc;

            return { ...rest, ...course };
        });

        return mappingUserCourses?.slice(
            0,
            limit ?? mappingUserCourses.length
        ) as (CourseJSON & Progress)[];
    };

    return useQuery({
        queryKey: ["courses"],
        queryFn: queryFunction,
    });
}
