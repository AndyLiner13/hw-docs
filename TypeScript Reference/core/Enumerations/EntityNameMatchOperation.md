# EntityNameMatchOperation Enum

Defines the valid matching operations that are available when using [findEntities()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#findentities) to find world entities.

## Signature

```typescript
export declare enum EntityNameMatchOperation
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Contains | 3 | Entity name must contain the provided string |
| EndsWith | 2 | Entity name must end with the provided string |
| Exact | 0 | Entity name must exactly match the provided string |
| Regex | 4 | Entity name must match the provided regular expression |
| StartsWith | 1 | Entity name must start with the provided string |

## References

- [findEntities()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#findentities) - Method that uses this enumeration for entity searching

## Examples

### Finding Entities with Different Match Operations

```typescript
// Exact match
const exactEntities = world.findEntities("PlayerSpawn", EntityNameMatchOperation.Exact);

// Starts with
const spawns = world.findEntities("Spawn", EntityNameMatchOperation.StartsWith);

// Ends with
const points = world.findEntities("Point", EntityNameMatchOperation.EndsWith);

// Contains
const platforms = world.findEntities("Platform", EntityNameMatchOperation.Contains);

// Regex pattern
const numbered = world.findEntities("\\d+", EntityNameMatchOperation.Regex);
```