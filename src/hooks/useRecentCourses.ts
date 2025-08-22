import { useQuery } from "@tanstack/react-query";
import { CourseJSON, IsObtainedCourse } from "../types/types";
import {
    getCourses,
    getDataLocalStorage,
    getUserObtainedCourses,
} from "../api";

export default function useRecentCourses(key: string, userID?: number) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const data = getDataLocalStorage(key);
            if (!data)
                throw new Error("Ha habido un error al recuperar los datos...");

            const courses = getCourses(data);

            const filteredCourses = courses
                .sort((a, b) => {
                    const courseDateA = new Date(a.createdAt).getTime();
                    const courseDateB = new Date(b.createdAt).getTime();
                    return courseDateB - courseDateA;
                })
                .slice(0, 3);

            const userCourses = getUserObtainedCourses(userID, data);

            return filteredCourses.map((c) => ({
                ...c,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === c.curseID
                ),
            }));
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["recentCourses", userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
