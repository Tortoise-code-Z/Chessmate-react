import { useQuery } from "@tanstack/react-query";
import {
    AuthorCurseData,
    BBDD,
    Course,
    CourseJSON,
    IsObtainedCourse,
} from "../types/types";
import axios from "axios";

export default function useCourse(
    url: string,
    courseID: number,
    userID?: number
) {
    const queryFunction: () => Promise<
        Course & IsObtainedCourse
    > = async () => {
        const response = await axios.get<BBDD>(url);

        const course =
            response.data.courses.find((c) => c.curseID === courseID) ||
            ({} as CourseJSON);

        const authorsData = course.authors.map(
            (c) =>
                response.data.authors.find((a) => a.id === c) ||
                ({} as AuthorCurseData)
        );

        const userCourses = response.data.users.find(
            (u) => u.userID === userID
        )?.courses;

        return {
            ...course,
            authors: [...authorsData],
            isObtained: userCourses?.some(
                (uc) => uc.courseId === course.curseID
            ),
        };
    };

    return useQuery({
        queryKey: ["useCourse", courseID, userID],
        queryFn: queryFunction,
    });
}
