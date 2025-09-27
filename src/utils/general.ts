export const isOnValues = <T>(
    value: unknown,
    values: readonly T[]
): T | undefined => {
    return values.includes(value as T) ? (value as T) : undefined;
};

export const regExpCheck = (value: unknown, regex: RegExp): boolean => {
    if (typeof value !== "string") return false;
    return regex.test(value);
};

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
