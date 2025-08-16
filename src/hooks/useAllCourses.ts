import { useQuery } from "@tanstack/react-query";
import {
    BBDD,
    CourseJSON,
    FilterOptions,
    IsObtainedCourse,
} from "../types/types";
import {
    getAllCourses,
    getFilteredCourses,
    getSearchedCourses,
    getUserObtainedCourses,
} from "../api";

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

            const userCourses = getUserObtainedCourses(userID, data);

            if (!search && !filter) {
                return getAllCourses(userCourses, data);
            }

            if (search && !filter) {
                return getSearchedCourses(search, userCourses, data);
            }

            if (filter && !search) {
                return getFilteredCourses(filter, userCourses, data);
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
