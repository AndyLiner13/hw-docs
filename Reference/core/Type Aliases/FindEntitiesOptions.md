Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_findentitiesoptions

# FindEntitiesOptions type

Options for the [World.findEntities()](../Classes/World.md#findentities) method.

## Signature

```
export declare type FindEntitiesOptions = {
    rootEntity?: Entity;
    matchOperation?: EntityNameMatchOperation;
};
```

## References

[Entity](../Classes/Entity.md), [EntityNameMatchOperation](../Enumerations/EntityNameMatchOperation.md)

## Remarks

rootEntity - Will only search for entities that are descendents of the given root matchOperation - The match operation to run when searching for entities with given string
Options are [EntityNameMatchOperation.Exact](../Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.StartsWith](../Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.EndsWith](../Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.Contains](../Enumerations/EntityNameMatchOperation.md), and [EntityNameMatchOperation.Regex](../Enumerations/EntityNameMatchOperation.md)