/**
 * Makes properties required based on a condition.
 * 
 * Example usage:
 * type Form = ConditionalRequired<{name: string; email?: string; phone?: string}, 'name', 'email' | 'phone'>;
 * const validForm1: Form = { name: "John" }; // OK
 * const validForm2: Form = { name: "John", email: "john@example.com", phone: "123-456-7890" }; // OK
 * const invalidForm: Form = { name: "John", email: "john@example.com" }; // Error: Both email and phone are required if one is present
 */
export type ConditionalRequired<T, C extends keyof T, K extends keyof T> = Omit<T, K> &
  (T[C] extends never ? Partial<Pick<T, K>> : Required<Pick<T, K>>);