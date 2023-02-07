# Zod

This is a cheat sheet repo for the [Zod](https://www.npmjs.com/package/zod#introduction) NPM package

> Note: Zod is a TypeScript-first schema validation library (useful for validating user input when making API calls)

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Usage](#usage)
  - [Import Zod](#import-zod)
  - [Getting Started](#getting-started)
- [Basic Types](#basic-types)
- [Arrays](#arrays)
- [Objects](#objects)
- [Unions](#unions)
- [Literals](#literals)
- [String Validation](#string-validation)
- [Number Validation](#number-validation)
- [Date Validation](#date-validation)
- [Array Validation](#array-validation)
- [Object Validation](#object-validation)
- [Tuple Validation](#tuple-validation)
- [Optional Properties](#optional-properties)
- [Nullable Properties](#nullable-properties)
- [Default Values](#default-values)
- [More](#more)

## Installation

```bash
npm i zod
```

## Development

```bash
npm i
npm run dev
```

&nbsp;

---

&nbsp;

## Usage

### Import Zod

```ts
import { z } from 'zod'
```

### Getting Started

- Define a schema

```ts
const mySchema = z.object({
  name: z.string(),
  age: z.number(),
})
```

- Parse Data

```ts
const myData = mySchema.parse({
  name: 'John',
  age: 30,
})
```

&nbsp;

---

&nbsp;

## Basic Types

```ts
// primitive values
z.string()
z.number()
z.bigint()
z.boolean()
z.date()
z.symbol()

// empty types
z.undefined()
z.null()
z.void() // accepts undefined

// catch-all types
// allows any value
z.any()
z.unknown()

// never type
// allows no values
z.never()
```

## Arrays

```ts
// array of strings
z.array(z.string())
```

## Objects

```ts
// object with a name property
z.object({
  name: z.string(),
})
```

## Unions

```ts
// union of string and number
z.union([z.string(), z.number()])
```

## Literals

```ts
// literal string
z.literal('hello') // accepts 'hello' only
```

&nbsp;

---

&nbsp;

## String Validation

```ts
z.string().max(5)
z.string().min(5)
z.string().length(5)
z.string().email()
z.string().url()
z.string().uuid()
z.string().cuid()
z.string().regex(/hello/gi)
z.string().startsWith('a')
z.string().endsWith('a')
z.string().trim() // trim whitespace
z.string().datetime() // defaults to UTC, see below for options
```

## Number Validation

```ts
z.number().gt(5)
z.number().gte(5) // alias .min(5)
z.number().lt(5)
z.number().lte(5) // alias .max(5)

z.number().int() // value must be an integer

z.number().positive() //     > 0
z.number().nonnegative() //  >= 0
z.number().negative() //     < 0
z.number().nonpositive() //  <= 0

z.number().multipleOf(5) // Evenly divisible by 5. Alias .step(5)

z.number().finite() // value must be finite, not Infinity or -Infinity
```

## Date Validation

```ts
z.date().min(new Date('2020-01-01'))
z.date().max(new Date('2020-01-01'))
```

## Array Validation

```ts
z.array(z.string()).nonempty() // array must have at least one item
z.array(z.string()).length(5) // array must have exactly 5 items
z.array(z.string()).min(5) // array must have at least 5 items
z.array(z.string()).max(5) // array must have at most 5 items
```

## Object Validation

```ts
z.object({
  name: z.string(),
  age: z.number(),
}).nonstrict() // allow extra properties
```

## Tuple Validation

```ts
z.tuple([z.string(), z.number()]) // tuple of string and number
```

&nbsp;

---

&nbsp;

## Optional Properties

```ts
z.object({
  name: z.string(),
  age: z.number().optional(), // age is optional
})
```

## Nullable Properties

```ts
z.object({
  name: z.string(),
  age: z.number().nullable(), // age is nullable
})
```

## Default Values

```ts
z.object({
  name: z.string(),
  age: z.number().default(30), // age defaults to 30
})
```

&nbsp;

---

&nbsp;

## More

- [Zod Docs](https://www.npmjs.com/package/zod#introduction)

&nbsp;

---

&nbsp;

[**Go To Top &nbsp; ⬆️**](#zod) &nbsp;
