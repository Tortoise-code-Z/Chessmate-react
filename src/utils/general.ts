import { CourseJSON, IsObtainedCourse } from "../types/types";

export const getObtainedState = (
    data: CourseJSON & IsObtainedCourse,
    requiredIsObtained: boolean
) => {
    if (!requiredIsObtained) return false;
    if (typeof data?.isObtained === "boolean") return data?.isObtained;

    return undefined;
};

export const isString = (value: any) =>
    typeof value === "string" ? value : undefined;

export const isOnVaulues = (value: any, values: any[]) => {
    console.log(
        value,
        typeof value === "string" && values.some((v) => v === value)
            ? value
            : undefined
    );
    return typeof value === "string" && values.some((v) => v === value)
        ? value
        : undefined;
};

export const isNumber = (value: any) =>
    typeof value === "number" ? value : undefined;

export const isBoolean = (value: any) =>
    typeof value === "boolean" ? value : undefined;

export const isArray = (value: any) =>
    Array.isArray(value) ? value : undefined;

export const isObject = (value: any) =>
    value !== null && typeof value === "object" && !Array.isArray(value)
        ? value
        : undefined;

export const isNull = (value: any) => (value === null ? value : undefined);

export const isFunction = (value: any) =>
    typeof value === "function" ? value : undefined;

export const regExpCheck = (value: any, regex: RegExp): boolean => {
    if (typeof value !== "string") return false;
    return regex.test(value);
};
