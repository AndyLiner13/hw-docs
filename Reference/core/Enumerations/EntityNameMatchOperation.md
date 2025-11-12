Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation

API reference

# EntityNameMatchOperation Enum

Defines the valid matching operations that are available when using [findEntities()](/hw-docs/Reference/core/Classes/World.md#findentities) to find world entities.

## Signature

```
export declare enum EntityNameMatchOperation
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Contains | `3` | Entity name must contain the provided string |
| EndsWith | `2` | Entity name must end with the provided string |
| Exact | `0` | Entity name must exactly match the provided string |
| Regex | `4` | Entity name must match the provided [regular expression](https://learn.microsoft.com/en-us/dotnet/standard/base-types/regular-expressions) |
| StartsWith | `1` | Entity name must start with the provided string |