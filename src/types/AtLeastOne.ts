/**
 * Ensures that at least one property from the given type is required.
 * 
 * Example usage:
 * type Person = AtLeastOne<{name?: string; age?: number; email?: string}>;
 * const validPerson: Person = { name: "John" }; // OK
 * const invalidPerson: Person = {}; // Error: At least one property is required
 */
export type AtLeastOne<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Record<Exclude<keyof T, K>, undefined>>;
}[keyof T];