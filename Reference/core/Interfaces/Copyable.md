---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_copyable
---

# [Copyable Interface](#copyable-interface)

The Copyable interface provides 'copy' and 'clone' methods for copying data from an existing reference.

## [Signature](#signature)

```ts
export interface Copyable<T> 
```

## [Methods](#methods)

### [clone()](#clone)

Creates a new reference with the source reference data copied to the new reference.

**Signature**

```ts
clone(): T;
```

**Returns**

T

### [copy(val)](#copyval)

Copies data from another reference.

**Signature**

```ts
copy(val: T): void;
```

**Parameters**

val: T

The value to copy data from.

**Returns**

void

