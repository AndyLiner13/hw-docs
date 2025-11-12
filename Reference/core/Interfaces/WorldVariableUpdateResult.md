Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldvariableupdateresult

API reference

# WorldVariableUpdateResult Interface

Result of a world variable update operation.

## Signature

```
export interface WorldVariableUpdateResult<T>
```

## Properties

|  |  |
| --- | --- |
| **errorType?** | The type of error that occurred, if any      Signature  ``` errorType?: WorldVariableUpdateErrorType; ``` |
| **success** | Whether the update operation was successful      Signature  ``` success: boolean; ``` |
| **value** | The updated value of the variable. If the update operation was not successful due to WorldVariableUpdateErrorType.CONCURRENT\_UPDATE or WorldVariableUpdateErrorType.UPDATE\_THROTTLED, this will be the value of the variable after the concurrent modification.      Signature  ``` value: T; ``` |