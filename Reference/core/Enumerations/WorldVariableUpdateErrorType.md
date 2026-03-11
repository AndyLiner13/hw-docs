---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldvariableupdateerrortype
---

# [WorldVariableUpdateErrorType Enum](#worldvariableupdateerrortype-enum)

Represents the different types of errors that can occur during world variable updates.

## [Signature](#signature)

```ts
export declare enum WorldVariableUpdateErrorType 
```

## [Enumeration Members](#enumeration-members)

| Member             | Value | Description                                                                                                    |
| ------------------ | ----- | -------------------------------------------------------------------------------------------------------------- |
| CONCURRENT\_UPDATE | `1`   | Update failed due to concurrent modification. Value set by another update operation is returned in the result. |
| SERVER\_ERROR      | `0`   | General update failure                                                                                         |
| UPDATE\_THROTTLED  | `2`   | Update failed due to throttling. Latest value is returned in the result.                                       |

