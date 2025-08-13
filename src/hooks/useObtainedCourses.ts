import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    ObtainedCourse,
    Progress,
    User,
} from "../types/types";

export default function useObtainedCourses(
    key: string,
    userId: number,
    limit: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & Progress)[]
    > = async () => {
        try {
            console.log("buscando...");
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const user =
                data.users.find((u) => u.userID === userId) || ({} as User);

            const courses = data.courses;
            const userCourses = user?.courses || ([] as ObtainedCourse[]);

            const mappingUserCourses = userCourses.map((uc) => {
                const id = uc.courseId;
                const course =
                    courses.find((c) => c.curseID === id) || ({} as CourseJSON);

                const { courseId, ...rest } = uc;

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
