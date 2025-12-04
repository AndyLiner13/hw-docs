Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_findentitiesoptions

# FindEntitiesOptions type

Options for the [World.findEntities()](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/World.md#findentities) method.

## Signature

```
export declare type FindEntitiesOptions = {
    rootEntity?: Entity;
    matchOperation?: EntityNameMatchOperation;
};
```

## References

[Entity](/hw-mcp-tools/documentation/hw-docs/Reference/core/Classes/Entity.md), [EntityNameMatchOperation](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/EntityNameMatchOperation.md)

## Remarks

rootEntity - Will only search for entities that are descendents of the given root matchOperation - The match operation to run when searching for entities with given string
Options are [EntityNameMatchOperation.Exact](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.StartsWith](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.EndsWith](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/EntityNameMatchOperation.md), [EntityNameMatchOperation.Contains](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/EntityNameMatchOperation.md), and [EntityNameMatchOperation.Regex](/hw-mcp-tools/documentation/hw-docs/Reference/core/Enumerations/EntityNameMatchOperation.md)