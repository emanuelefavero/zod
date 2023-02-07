/**
 * @desc zod is a TypeScript-first schema validation library (useful for validating user input when making API calls)
 * @see https://www.npmjs.com/package/zod#introduction
 * @install npm i zod
 */

import { z } from 'zod'

// * STRING SCHEMA
const schema = z.string()
console.log(schema.parse('hello'))
// console.log(schema.parse(123)) // throws error

// * OBJECT SCHEMA
const User = z.object({
  name: z.string(),
  age: z.number(),
})

console.log(User.parse({ name: 'John', age: 25 }))

type User = z.infer<typeof User>

// * ARRAY SCHEMA
const UserArray = z.array(User)

console.log(
  UserArray.parse([
    { name: 'John', age: 25 },
    { name: 'Jane', age: 30 },
  ])
)

// Array of Numbers Schema
const NumberArray = z.array(z.number())
console.log(NumberArray.parse([1, 2, 3]))

// * OTHER PRIMITIVES
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

// * LITERALS - allows only the specified value
z.literal('hello') // allows only 'hello'
z.literal(123) // allows only 123

// * STRING VALIDATION
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

// * NUMBER VALIDATION
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
