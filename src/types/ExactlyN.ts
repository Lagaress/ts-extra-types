import { AtLeastOne } from './AtLeastOne';

type Minus<N extends number, Result extends any[] = []> =
  Result['length'] extends N ? Result : Minus<N, [any, ...Result]>;

/**
 * Requires exactly N properties from the given set of keys to be present.
 * 
 * Example usage:
 * type ThreeColorComponents = ExactlyN<{red: number; green: number; blue: number; alpha: number}, 'red' | 'green' | 'blue' | 'alpha', 3>;
 * const validColor: ThreeColorComponents = { red: 255, green: 128, blue: 0 }; // OK
 * const invalidColor1: ThreeColorComponents = { red: 255, green: 128 }; // Error: Exactly 3 properties are required
 * const invalidColor2: ThreeColorComponents = { red: 255, green: 128, blue: 0, alpha: 1 }; // Error: Exactly 3 properties are required
 */
export type ExactlyN<T, K extends keyof T, N extends number> = N extends 1
  ? AtLeastOne<Pick<T, K>>
  : {
    [P in K]: {
      [Q in Exclude<K, P>]: ExactlyN<Omit<T, P>, Exclude<K, P>, Minus<N, [any]> extends number ? Minus<N, [any]> : never>;
    }[Exclude<K, P>];
  }[K] & Omit<T, K>;