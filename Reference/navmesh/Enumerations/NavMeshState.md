Source: https://developers.meta.com/horizon-worlds/reference/2.0.0/navmesh_navmeshstate

# NavMeshState Enum

The possible state values for the [NavMeshInstanceInfo](/hw-mcp-tools/documentation/hw-docs/Reference/navmesh/Type%20Aliases/NavMeshInstanceInfo.md) type.

## Signature

```
export declare enum NavMeshState
```

## Enumeration Members

| Member | Value | Description |
| --- | --- | --- |
| Baking | `"Baking"` | The navigation mesh is being rebuilt. |
| Loading | `"Loading"` | Details are being loaded for this navigation mesh. |
| Ready | `"Ready"` | The instance is initialized and ready to use. |
| Uninitialized | `"Uninitialized"` | The instance hasn't been initialized yet. |