Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitytagmatchoperation

# EntityTagMatchOperation Enum

Defines the valid matching operations that are available when using [getEntitiesWithTags()](/hw-docs/Reference/core/Classes/World.md#getentitieswithtags) to find world entities.

## Signature

```
export declare enum EntityTagMatchOperation
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| HasAllExact | `1` | All of the sought tags must be present in an [Entity's tags](/hw-docs/Reference/core/Classes/Entity.md#tags) for that entity to be included in the result. The match must be exact. |
| HasAnyExact | `0` | A single match encountered in an [Entity's tags](/hw-docs/Reference/core/Classes/Entity.md#tags) results in that entity being included in the result. The match must be exact. |