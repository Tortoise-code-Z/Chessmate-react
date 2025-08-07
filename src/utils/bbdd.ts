import { BBDD } from "../types/types";

export const calculateProgressCourse = (
    userID: number,
    courseID: number,
    bbdd: BBDD
) => {
    const user = bbdd.users.find((u) => u.userID === userID);
    const course = user?.defaultCourses.find((c) => c.courseId === courseID);
    const numCoursesCompleted = course?.themes.filter(
        (t) => t.completed === true
    ).length as number;

    const totalCourseThemes = course?.themes.length as number;

    return numCoursesCompleted / totalCourseThemes;
};
