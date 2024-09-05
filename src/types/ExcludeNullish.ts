/**
 * Creates a new type with all properties non-nullable.
 * 
 * Example usage:
 * type NullableUser = { id: number; name: string | null; age: number | undefined };
 * type NonNullableUser = ExcludeNullish<NullableUser>;
 * // NonNullableUser is equivalent to { id: number; name: string; age: number }
 */
export type ExcludeNullish<T> = {
  [K in keyof T]-?: NonNullable<T[K]>;
};