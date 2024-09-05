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

- **`AtLeastOne`**: Ensures that at least one property from the given type is required.
- **`RequireOnlyOne`**: Requires exactly one property from the given set of keys, making others optional.
- **`PickOptional`**: Creates a new type with only the optional properties from the given type.
- **`ExcludeNullish`**: Creates a new type with all properties non-nullable.
- **`AllOrNone`**: Requires either all specified properties to be present or none of them.
- **`RequireAtMostOne`**: Allows at most one property from the given set of keys to be present.
- **`OneOrMore`**: Requires at least one property from the given type to be present.
- **`ExactlyN`**: Requires exactly N properties from the given set of keys to be present.
- **`MutuallyExclusive`**: Ensures that only one of the two specified properties can be present at a time.
- **`DefaultRequired`**: Makes specified properties required with a default type.
- **`ConditionalRequired`**: Makes properties required based on a condition.
