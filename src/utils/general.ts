import { CourseJSON, IsObtainedCourse } from "../types/types";

export const getObtainedState = (
    data: CourseJSON & IsObtainedCourse,
    requiredIsObtained: boolean
) => {
    if (!requiredIsObtained) return false;
    if (typeof data?.isObtained === "boolean") return data?.isObtained;

    return undefined;
};
