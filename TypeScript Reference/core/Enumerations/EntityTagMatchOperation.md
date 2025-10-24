# EntityTagMatchOperation Enum

Defines the valid matching operations that are available when using [getEntitiesWithTags()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#getentitieswithtags) to find world entities.

## Signature

```typescript
export declare enum EntityTagMatchOperation
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| HasAllExact | 1 | All of the sought tags must be present in an Entity's tags for that entity to be included in the result. The match must be exact. |
| HasAnyExact | 0 | A single match encountered in an Entity's tags results in that entity being included in the result. The match must be exact. |

## References

- [getEntitiesWithTags()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#getentitieswithtags) - Method that uses this enumeration for entity searching

## Examples

### Finding Entities with Tag Matching

```typescript
// Find entities that have ANY of the specified tags
const anyTaggedEntities = world.getEntitiesWithTags(
    ["platform", "obstacle", "pickup"], 
    EntityTagMatchOperation.HasAnyExact
);

// Find entities that have ALL of the specified tags
const allTaggedEntities = world.getEntitiesWithTags(
    ["interactive", "movable", "important"], 
    EntityTagMatchOperation.HasAllExact
);

// Example: Find entities with specific combinations
function findPlatforms() {
    // Find any platform-like entities
    return world.getEntitiesWithTags(
        ["platform", "floor", "ground"], 
        EntityTagMatchOperation.HasAnyExact
    );
}

function findInteractivePlatforms() {
    // Find entities that are both platforms AND interactive
    return world.getEntitiesWithTags(
        ["platform", "interactive"], 
        EntityTagMatchOperation.HasAllExact
    );
}
```