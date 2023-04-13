/**
 * Checks if a value is null or undefined.
 * @param value The value to check.
 * @returns True if the value is null or undefined, false otherwise.
 */
export function isNullOrUndefined(value: any) {
    return value == null;
}

/**
 * Checks if a string is empty.
 * @param value - The string to check.
 * @returns A boolean indicating if the string is empty.
 */
export function isEmpty(value: string): boolean {
    return !value;
}

/**
 * Returns the sum of two given numbers.
 * @param a - The first number.
 * @param b - The second number.
 * @returns The sum of a and b.
 */
export const sum = (a: number, b: number): number => {
    return a + b;
};
