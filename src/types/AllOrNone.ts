/**
 * Requires either all specified properties to be present or none of them.
 * 
 * Example usage:
 * type ShippingInfo = AllOrNone<{street: string; city: string; zipCode: string}, 'street' | 'city' | 'zipCode'>;
 * const validInfo1: ShippingInfo = { street: "123 Main St", city: "Anytown", zipCode: "12345" }; // OK
 * const validInfo2: ShippingInfo = {}; // OK
 * const invalidInfo: ShippingInfo = { street: "123 Main St" }; // Error: All or none of the properties must be provided
 */
export type AllOrNone<T, K extends keyof T> = Omit<T, K> & (
  | Required<Pick<T, K>>
  | Partial<Record<K, never>>
);