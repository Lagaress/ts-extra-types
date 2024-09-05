/**
 * Allows at most one property from the given set of keys to be present.
 * 
 * Example usage:
 * type PaymentMethod = RequireAtMostOne<{creditCard: string; paypal: string; bankTransfer: string}, 'creditCard' | 'paypal' | 'bankTransfer'>;
 * const validPayment1: PaymentMethod = { creditCard: "1234-5678-9012-3456" }; // OK
 * const validPayment2: PaymentMethod = {}; // OK
 * const invalidPayment: PaymentMethod = { creditCard: "1234-5678-9012-3456", paypal: "user@example.com" }; // Error: At most one payment method should be provided
 */
export type RequireAtMostOne<T, K extends keyof T> = Omit<T, K> & {
  [P in K]?: T[P];
} & { [P in K]?: never }[K];