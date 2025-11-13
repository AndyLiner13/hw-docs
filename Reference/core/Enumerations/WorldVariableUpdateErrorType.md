Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_worldvariableupdateerrortype

# WorldVariableUpdateErrorType Enum

Represents the different types of errors that can occur during world variable updates.

## Signature

```
export declare enum WorldVariableUpdateErrorType
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| CONCURRENT\_UPDATE | `1` | Update failed due to concurrent modification. Value set by another update operation is returned in the result. |
| SERVER\_ERROR | `0` | General update failure |
| UPDATE\_THROTTLED | `2` | Update failed due to throttling. Latest value is returned in the result. |