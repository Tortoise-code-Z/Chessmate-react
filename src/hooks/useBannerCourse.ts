import { useQuery } from "@tanstack/react-query";
import { BBDD, CourseJSON, IsObtainedCourse } from "../types/types";
import axios from "axios";

export default function useBannerCourse(url: string, userID?: number) {
    const queryFunction: () => Promise<
        CourseJSON & IsObtainedCourse
    > = async () => {
        const response = await axios.get<BBDD>(url);
        const courses = response.data.courses;
        const filteredCourses = courses
            .sort((a, b) => (b.sales as number) - (a.sales as number))
            .slice(0, 6);

        const userCourses = response.data.users.find(
            (u) => u.userID === userID
        )?.courses;

        const randomIndex = Math.floor(Math.random() * filteredCourses.length);

        const bannerCourse = filteredCourses[randomIndex];

        return {
            ...bannerCourse,
            isObtained: userCourses?.some(
                (uc) => uc.courseId === bannerCourse.curseID
            ),
        };
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
