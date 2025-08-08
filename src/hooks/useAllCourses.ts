import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    FilterOptions,
    IsObtainedCourse,
    ObtainedCourse,
} from "../types/types";

export default function useAllCourses(
    key: string,
    search: string,
    filter: FilterOptions | undefined,
    userID?: number
) {
    const queryFunction: () => Promise<
        (CourseJSON & IsObtainedCourse)[]
    > = async () => {
        try {
            const getData = localStorage.getItem(key);

            if (!getData)
                throw new Error("Ha habido un error al recuperar los datos...");

            const data: BBDD = JSON.parse(getData);

            const userCourses =
                data.users.find((u) => u.userID === userID)?.courses ||
                ([] as ObtainedCourse[]);

            if (!search && !filter) {
                const courses = data.courses.map((c) => ({
                    ...c,
                    isObtained: userCourses.some(
                        (uc) => uc.courseId === c.curseID
                    ),
                }));

                return courses || ([] as (CourseJSON & IsObtainedCourse)[]);
            }

            if (search && !filter) {
                const searchedCourses = data.courses.filter(
                    (c) =>
                        c.title.toLowerCase().includes(search.toLowerCase()) ||
                        c.shortDescription
                            .toLowerCase()
                            .includes(search.toLowerCase()) ||
                        c.level.toLowerCase().includes(search.toLowerCase())
                );

                const courses = searchedCourses.map((sc) => ({
                    ...sc,
                    isObtained: userCourses.some(
                        (uc) => uc.courseId === sc.curseID
                    ),
                }));

                return courses || ([] as (CourseJSON & IsObtainedCourse)[]);
            }

            if (filter && !search) {
                let courses;
                if (filter === "Todos") {
                    courses = data.courses.map((c) => ({
                        ...c,
                        isObtained: userCourses.some(
                            (uc) => uc.courseId === c.curseID
                        ),
                    }));

                    return courses || ([] as (CourseJSON & IsObtainedCourse)[]);
                }

                const filteredCourses = data.courses
                    .filter((c) => c.level === filter)
                    .map((fc) => ({
                        ...fc,
                        isObtained: userCourses.some(
                            (uc) => uc.courseId === fc.curseID
                        ),
                    }));

                return (
                    filteredCourses || ([] as (CourseJSON & IsObtainedCourse)[])
                );
            }

            return [] as (CourseJSON & IsObtainedCourse)[];
        } catch (error) {
            console.log(error);
            throw error;
        }
    };

    return useQuery({
        queryKey: ["allCourses", search, filter, userID],
        queryFn: queryFunction,
        staleTime: 1000 * 60 * 5,
    });
}
