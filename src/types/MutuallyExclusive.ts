/**
 * Ensures that only one of the two specified properties can be present at a time.
 * 
 * Example usage:
 * type Animal = MutuallyExclusive<{name: string; species: string; barkSound?: string; meowSound?: string}, 'barkSound', 'meowSound'>;
 * const validDog: Animal = { name: "Buddy", species: "Dog", barkSound: "Woof!" }; // OK
 * const validCat: Animal = { name: "Whiskers", species: "Cat", meowSound: "Meow!" }; // OK
 * const invalidAnimal: Animal = { name: "Confused", species: "Hybrid", barkSound: "Woof!", meowSound: "Meow!" }; // Error: Cannot have both barkSound and meowSound
 */
export type MutuallyExclusive<T, K1 extends keyof T, K2 extends keyof T> = (
  | Required<Pick<T, K1>> & Partial<Record<K2, never>>
  | Required<Pick<T, K2>> & Partial<Record<K1, never>>
) & Omit<T, K1 | K2>;