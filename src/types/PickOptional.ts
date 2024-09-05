/**
 * Creates a new type with only the optional properties from the given type.
 * 
 * Example usage:
 * type User = { id: number; name: string; age?: number; email?: string };
 * type OptionalUserFields = PickOptional<User, 'age' | 'email'>;
 * // OptionalUserFields is equivalent to { age?: number; email?: string }
 */
export type PickOptional<T, K extends keyof T> = Partial<Pick<T, K>>;