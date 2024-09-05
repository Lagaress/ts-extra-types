# ts-extra-types

## About

Utility TypeScript types to enhance type safety and development productivity

## Why ts-extra-types?
When building complex applications in TypeScript, you often encounter scenarios where the default type utilities aren't enough. This library provides a set of carefully crafted type utilities to cover edge cases and complex type requirements, such as enforcing optionality, requiring specific fields, or handling mutually exclusive properties.

## Installation

```bash
npm install  ts-extra-types --save-dev
```

## Usage

```typescript
import type { AtLeastOne } from "ts-extra-types";

type User = {
  id: number;
  name: string;
  age?: number;
  email?: string;
};

type UserWithAtLeastOne = AtLeastOne<User>;
```

## Utilities
Click the utility name for more information

- **[`AtLeastOne`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/AtLeastOne.ts)**: Ensures that at least one property from the given type is required.
- **[`RequireOnlyOne`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/RequireOnlyOne.ts)**: Requires exactly one property from the given set of keys, making others optional.
- **[`PickOptional`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/PickOptional.ts)**: Creates a new type with only the optional properties from the given type.
- **[`ExcludeNullish`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/ExcludeNullish.ts)**: Creates a new type with all properties non-nullable.
- **[`AllOrNone`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/AllOrNone.ts)**: Requires either all specified properties to be present or none of them.
- **[`RequireAtMostOne`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/RequireAtMostOne.ts)**: Allows at most one property from the given set of keys to be present.
- **[`OneOrMore`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/OneOrMore.ts)**: Requires at least one property from the given type to be present.
- **[`ExactlyN`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/ExactlyN.ts)**: Requires exactly N properties from the given set of keys to be present.
- **[`MutuallyExclusive`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/MutuallyExclusive.ts)**: Ensures that only one of the two specified properties can be present at a time.
- **[`DefaultRequired`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/DefaultRequired.ts)**: Makes specified properties required with a default type.
- **[`ConditionalRequired`](https://github.com/Lagaress/ts-extra-types/tree/main/src/types/ConditionalRequired.ts)**: Makes properties required based on a condition.
