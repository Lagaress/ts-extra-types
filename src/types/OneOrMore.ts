/**
 * Requires at least one property from the given type to be present.
 * 
 * Example usage:
 * type ContactInfo = OneOrMore<{phone: string; email: string; address: string}>;
 * const validContact1: ContactInfo = { phone: "123-456-7890" }; // OK
 * const validContact2: ContactInfo = { phone: "123-456-7890", email: "user@example.com" }; // OK
 * const invalidContact: ContactInfo = {}; // Error: At least one property is required
 */
export type OneOrMore<T> = {
  [K in keyof T]-?: Required<Pick<T, K>> & Partial<Omit<T, K>>;
}[keyof T];