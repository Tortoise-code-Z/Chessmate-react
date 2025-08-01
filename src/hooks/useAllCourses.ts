import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, Level, ObtainedCourse } from "../types/types";
import axios from "axios";

export default function useAllCourses(
    url: string,
    search: string,
    filter: Level | undefined,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & { isObtained?: boolean })[]
    > = async () => {
        const response = await axios.get<BBDD>(url);

        if (!search && !filter) {
            const userCourses =
                response.data.users.find((u) => u.userID === userID)?.courses ||
                ([] as ObtainedCourse[]);
            return response.data.courses.map((c) => {
                return {
                    ...c,
                    isObtained: userCourses.some(
                        (uc) => uc.courseId === c.curseID
                    ),
                };
            });
        }

        if (search && !filter)
            return response.data.courses.filter(
                (c) =>
                    c.title.toLowerCase().includes(search.toLowerCase()) ||
                    c.shortDescription
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    c.level.toLowerCase().includes(search.toLowerCase())
            );

        if (filter && !search)
            return response.data.courses.filter((c) => c.level === filter);

        return [] as (CourseJSON & { isObtained?: boolean })[];
    };

    return useQuery({
        queryKey: ["allCourses", search, filter, userID],
        queryFn: queryFunction,
    });
}
