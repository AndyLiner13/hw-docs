# Handedness Enum

Indicates whether a player is left or right-handed.

## Signature

```typescript
export declare enum Handedness
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Left | 0 | The player is left-handed. |
| Right | 1 | The player is right-handed. |

## Examples

### Using Player Handedness

```typescript
// Check player handedness
const handedness = player.getHandedness();

if (handedness === Handedness.Left) {
    console.log("Player is left-handed");
    // Position UI elements accordingly
} else if (handedness === Handedness.Right) {
    console.log("Player is right-handed");
    // Position UI elements accordingly
}

// Set different interactions based on handedness
function setupHandedInteraction(player: Player) {
    const hand = player.getHandedness();
    if (hand === Handedness.Left) {
        // Setup left-handed controls
    } else {
        // Setup right-handed controls
    }
}
```