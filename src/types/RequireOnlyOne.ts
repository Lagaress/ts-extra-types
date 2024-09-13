/**
 * Requires exactly one property from the given set of keys, making others optional.
 * 
 * Example usage:
 * type LoginCredentials = RequireOnlyOne<{username: string; email: string; phone: string}, 'username' | 'email' | 'phone'>;
 * const validLogin: LoginCredentials = { username: "john_doe" }; // OK
 * const invalidLogin: LoginCredentials = { username: "john_doe", email: "john@example.com" }; // Error: Only one property should be provided
 */
export type RequireOnlyOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?: Required<Pick<T, K>>
            & Partial<Record<Exclude<Keys, K>, never>>
    }[Keys]