# Class interface

An interface representing a class.

## Signature

```typescript
export interface Class<TConstructorParameters extends any[] = any[], TClassInstance = unknown>
```

## Methods

| Method | Description |
|--------|-------------|
| `new(...args)` | Creates a new instance of the class. **Signature:** `new (...args: TConstructorParameters): TClassInstance` **Parameters:** `args: TConstructorParameters` - The arguments for creating the instance. **Returns:** `TClassInstance` - The new class instance. |

## Remarks

This interface provides a generic way to represent class constructors in TypeScript, enabling type-safe class instantiation patterns.