/**
 * Makes specified properties required with a default type.
 * 
 * Example usage:
 * type User = { id: number; name: string; role?: string };
 * type UserWithDefaultRole = DefaultRequired<User, 'role', 'user'>;
 * const user: UserWithDefaultRole = { id: 1, name: "John" }; // OK, role will be of type string | 'user'
 */
export type DefaultRequired<T, K extends keyof T, D> = Omit<T, K> & {
  [P in K]-?: T[P] | D;
};