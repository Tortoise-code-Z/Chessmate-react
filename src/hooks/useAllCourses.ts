import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    FilterOptions,
    IsObtainedCourse,
} from "../types/types";
import axios from "axios";

export default function useAllCourses(
    url: string,
    search: string,
    filter: FilterOptions | undefined,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        const response = await axios.get<BBDD>(url);

        const userCourses = response.data.users.find(
            (u) => u.userID === userID
        )?.courses;

        if (!search && !filter) {
            return response.data.courses.map((c) => ({
                ...c,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === c.curseID
                ),
            }));
        }

        if (search && !filter) {
            const searchedCourses = response.data.courses.filter(
                (c) =>
                    c.title.toLowerCase().includes(search.toLowerCase()) ||
                    c.shortDescription
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    c.level.toLowerCase().includes(search.toLowerCase())
            );

            return searchedCourses.map((sc) => ({
                ...sc,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === sc.curseID
                ),
            }));
        }

        if (filter && !search) {
            if (filter === "Todos")
                return response.data.courses.map((c) => ({
                    ...c,
                    isObtained: userCourses?.some(
                        (uc) => uc.courseId === c.curseID
                    ),
                }));
            const filteredCourses = response.data.courses.filter(
                (c) => c.level === filter
            );

            return filteredCourses.map((fc) => ({
                ...fc,
                isObtained: userCourses?.some(
                    (uc) => uc.courseId === fc.curseID
                ),
            }));
        }

        return [] as (CourseJSON & IsObtainedCourse)[];
    };

    return useQuery({
        queryKey: ["allCourses", search, filter, userID],
        queryFn: queryFunction,
    });
}
