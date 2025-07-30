import { useQuery } from "@tanstack/react-query";
import { AuthorCurseData, BBDD, Course, CourseJSON } from "../types/types";
import axios from "axios";

export default function useCourse(url: string, courseID: number) {
    const queryFunction: () => Promise<Course> = async () => {
        const response = await axios.get<BBDD>(url);

        const course =
            response.data.courses.find((c) => c.curseID === courseID) ||
            ({} as CourseJSON);

        const authorsData = course.authors.map(
            (c) =>
                response.data.authors.find((a) => a.id === c) ||
                ({} as AuthorCurseData)
        );

        const { authors, ...rest } = course;

        return {
            ...rest,
            authors: [...authorsData],
        };
    };

    return useQuery({
        queryKey: ["useCourse", courseID],
        queryFn: queryFunction,
    });
}
