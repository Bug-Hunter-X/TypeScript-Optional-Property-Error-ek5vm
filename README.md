# TypeScript Optional Property Error

This repository demonstrates a common error in TypeScript related to optional properties in interfaces and type aliases.

## The Problem

When defining interfaces or type aliases with optional properties, TypeScript allows you to omit those properties when creating objects of that type. However, if you don't handle the possibility of those properties being undefined in your code, you'll encounter runtime errors.

The provided `bug.ts` file illustrates this issue.  The `printName` function expects an object with a `name` property, but the `age` property is optional.  While the example with a provided `age` works correctly, calling `printName` with an empty object or one that lacks the `name` property results in a runtime error because TypeScript's type system doesn't enforce the presence of optional properties at runtime.

## The Solution

The `bugSolution.ts` file presents a solution involving optional chaining (`?.`) and nullish coalescing (`??`) to safely access and handle optional properties.  This approach checks for the existence of the optional property before attempting to access it, preventing runtime errors.

## How to reproduce

1. Clone this repository
2. Navigate to the repository directory in your terminal
3. Compile the code using the command `tsc bug.ts` and `tsc bugSolution.ts`
4. Run the compiled javascript files.