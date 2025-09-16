import { CourseJSON, IsObtainedCourse } from "../types/types";

export const getObtainedState = (
    data: CourseJSON & IsObtainedCourse,
    requiredIsObtained: boolean
) => {
    if (!requiredIsObtained) return false;
    if (typeof data?.isObtained === "boolean") return data?.isObtained;

    return undefined;
};

// export const isString = (value: unknown): string | undefined =>
//     typeof value === "string" ? value : undefined;

export const isOnVaulues = (
    value: unknown,
    values: unknown[]
): string | undefined => {
    return typeof value === "string" && values.some((v) => v === value)
        ? value
        : undefined;
};

// export const isNumber = (value: unknown): number | undefined =>
//     typeof value === "number" ? value : undefined;

// export const isBoolean = (value: unknown): boolean | undefined =>
//     typeof value === "boolean" ? value : undefined;

// export const isArray = <T>(value: unknown): T[] | undefined =>
//     Array.isArray(value) ? (value as T[]) : undefined;

// export const isObject = (value: unknown): Record<string, unknown> | undefined =>
//     value !== null && typeof value === "object" && !Array.isArray(value)
//         ? (value as Record<string, unknown>)
//         : undefined;

// export const isNull = (value: unknown): null | undefined =>
//     value === null ? value : undefined;

// export const isFunction = (value: unknown) =>
//     typeof value === "function" ? value : undefined;

export const regExpCheck = (value: unknown, regex: RegExp): boolean => {
    if (typeof value !== "string") return false;
    return regex.test(value);
};

// ---------------------
// TYPE GUARDS (isX)
// ---------------------

export function isString(value: unknown): value is string {
    return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

export function isBoolean(value: unknown): value is boolean {
    return typeof value === "boolean";
}

export function isArray<T>(value: unknown): value is T[] {
    return Array.isArray(value);
}

export function isObject(value: unknown): value is Record<string, unknown> {
    return value !== null && typeof value === "object" && !Array.isArray(value);
}

// ---------------------
// HELPER (asX)
// ---------------------

export function asString(value: unknown): string | undefined {
    return isString(value) ? value : undefined;
}

export function asNumber(value: unknown): number | undefined {
    return isNumber(value) ? value : undefined;
}

export function asBoolean(value: unknown): boolean | undefined {
    return isBoolean(value) ? value : undefined;
}

export function asArray<T>(value: unknown): T[] | undefined {
    return isArray<T>(value) ? value : undefined;
}

export function asObject<T extends object>(value: unknown): T | undefined {
    return value !== null && typeof value === "object" && !Array.isArray(value)
        ? (value as T)
        : undefined;
}
