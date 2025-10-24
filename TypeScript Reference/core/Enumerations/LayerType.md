# LayerType Enum

The type of layer in the world.

## Signature

```typescript
export declare enum LayerType
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Both | 2 | The layer is for both players and objects. |
| Objects | 1 | The layer is for objects. |
| Player | 0 | The layer for players. |

## Examples

### Working with Different Layer Types

```typescript
// Check layer type
const layerType = layer.getType();

switch (layerType) {
    case LayerType.Player:
        console.log("This layer affects players");
        break;
    case LayerType.Objects:
        console.log("This layer affects objects");
        break;
    case LayerType.Both:
        console.log("This layer affects both players and objects");
        break;
}

// Set layer interactions based on type
function configureLayer(layer: Layer, type: LayerType) {
    if (type === LayerType.Player || type === LayerType.Both) {
        // Enable player interactions
    }
    if (type === LayerType.Objects || type === LayerType.Both) {
        // Enable object interactions
    }
}
```