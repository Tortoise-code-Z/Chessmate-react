import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    IsObtainedCourse,
    ObtainedCourse,
} from "../types/types";

export default function useBannerCourse(key: string, userID?: number) {
    const queryFunction: () => Promise<
        CourseJSON & IsObtainedCourse
    > = async () => {
        try {
            const getData = localStorage.getItem(key);
            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const courses = data.courses;

            const filteredCourses = courses
                .sort((a, b) => (b.sales as number) - (a.sales as number))
                .slice(0, 6);

            const userCourses =
                data.users.find((u) => u.userID === userID)?.courses ||
                ([] as ObtainedCourse[]);

            const randomIndex = Math.floor(
                Math.random() * filteredCourses.length
            );

            const bannerCourse = filteredCourses[randomIndex];

            return {
                ...bannerCourse,
                isObtained: userCourses.some(
                    (uc) => uc.courseId === bannerCourse.curseID
                ),
            };
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["bannerCourse", userID],
        queryFn: queryFunction,
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnReconnect: false,
        refetchOnMount: false,
    });
}
