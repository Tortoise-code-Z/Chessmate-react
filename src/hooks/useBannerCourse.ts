import { useQuery } from "@tanstack/react-query";
import { BBDD, Course } from "../types/types";
import axios from "axios";

export default function useBannerCourse(url: string) {
    const queryFunction: () => Promise<Course> = async () => {
        const response = await axios.get<BBDD>(url);
        const courses = response.data.courses;
        const filteredCourses = courses
            .sort((a, b) => (b.sales as number) - (a.sales as number))
            .slice(0, 6);

        const randomIndex = Math.floor(Math.random() * filteredCourses.length);

        const bannerCourse = filteredCourses[randomIndex];

        return bannerCourse;
    };

    return useQuery({
        queryKey: ["bannerCourse"],
        queryFn: queryFunction,
    });
}
