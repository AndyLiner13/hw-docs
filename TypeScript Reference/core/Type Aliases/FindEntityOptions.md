# FindEntitiesOptions type

Options for the [World.findEntities()](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_world#findentities) method.

## Signature

```typescript
export declare type FindEntitiesOptions = {
    rootEntity?: Entity;
    matchOperation?: EntityNameMatchOperation;
};
```

## References

[Entity](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entity), [EntityNameMatchOperation](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation)

## Remarks

- `rootEntity` - Will only search for entities that are descendents of the given root
- `matchOperation` - The match operation to run when searching for entities with given string

Options are [EntityNameMatchOperation.Exact](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation), [EntityNameMatchOperation.StartsWith](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation), [EntityNameMatchOperation.EndsWith](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation), [EntityNameMatchOperation.Contains](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation), and [EntityNameMatchOperation.Regex](https://developers.meta.com/horizon-worlds/reference/2.0.0/core_entitynamematchoperation)