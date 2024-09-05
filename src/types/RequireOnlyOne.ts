/**
 * Requires exactly one property from the given set of keys, making others optional.
 * 
 * Example usage:
 * type LoginCredentials = RequireOnlyOne<{username: string; email: string; phone: string}, 'username' | 'email' | 'phone'>;
 * const validLogin: LoginCredentials = { username: "john_doe" }; // OK
 * const invalidLogin: LoginCredentials = { username: "john_doe", email: "john@example.com" }; // Error: Only one property should be provided
 */
export type RequireOnlyOne<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>> & { [P in K]-?: Required<Pick<T, P>> };