/**
 * Requires at least one property from the given set of keys.
 * 
 * Example usage:
 * type PaymentMethod = RequireAtLeastOne<{ creditCard: string; paypal: string; bankTransfer: string }, 'creditCard' | 'paypal' | 'bankTransfer'>;
 * const validPayment1: PaymentMethod = { creditCard: "1234-5678-9012-3456" }; // OK
 * const validPayment2: PaymentMethod = { creditCard: "1234-5678-9012-3456", paypal: "user@example.com" }; // OK
 * const invalidPayment: PaymentMethod = {}; // Error: Al menos una propiedad debe estar definida
 */
export type RequireAtMostOne<T, Keys extends keyof T = keyof T> =
    Pick<T, Exclude<keyof T, Keys>>
    & {
        [K in Keys]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<Keys, K>>>
    }[Keys]

type PaymentMethod = RequireAtMostOne<{ creditCard: string; paypal: string; bankTransfer: string }, 'creditCard' | 'paypal' | 'bankTransfer'>;