---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldvariableupdateresult
---

# [WorldVariableUpdateResult Interface](#worldvariableupdateresult-interface)

Result of a world variable update operation.

## [Signature](#signature)

```ts
export interface WorldVariableUpdateResult<T> 
```

## [Properties](#properties)

### [errorType?](#errortype)

The type of error that occurred, if any

**Signature**

```ts
errorType?: WorldVariableUpdateErrorType;
```

### [success](#success)

Whether the update operation was successful

**Signature**

```ts
success: boolean;
```

### [value](#value)

The updated value of the variable. If the update operation was not successful due to WorldVariableUpdateErrorType.CONCURRENT\_UPDATE or WorldVariableUpdateErrorType.UPDATE\_THROTTLED, this will be the value of the variable after the concurrent modification.

**Signature**

```ts
value: T;
```

