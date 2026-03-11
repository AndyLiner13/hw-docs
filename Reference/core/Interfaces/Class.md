---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_class
---

# [Class Interface](#class-interface)

An interface representing a class.

## [Signature](#signature)

```ts
export interface Class<TConstructorParameters extends any[] = any[], TClassInstance = unknown> 
```

## [Methods](#methods)

### [(new)(args)](#newargs)

Creates a new instance of the class.

**Signature**

```ts
new (...args: TConstructorParameters): TClassInstance;
```

**Parameters**

args: TConstructorParameters

The arguments for creating the instance.

**Returns**

TClassInstance

The new class instance.

