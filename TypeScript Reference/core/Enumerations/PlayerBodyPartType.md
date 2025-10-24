# PlayerBodyPartType Enum

The type of body part of a player.

## Signature

```typescript
export declare enum PlayerBodyPartType
```

## Enumeration Members

| Member | Value | Description |
|---------|--------|-------------|
| Foot | 1 | The body part is a foot. |
| Head | 0 | The body part is a head. |
| LeftHand | 3 | The body part is a left hand. |
| RightHand | 4 | The body part is a right hand. |
| Torso | 2 | The body part is a torso. |

## Examples

### Working with Player Body Parts

```typescript
// Check specific body part
function handleBodyPartInteraction(bodyPart: PlayerBodyPartType) {
    switch (bodyPart) {
        case PlayerBodyPartType.Head:
            console.log("Head interaction");
            break;
        case PlayerBodyPartType.LeftHand:
        case PlayerBodyPartType.RightHand:
            console.log("Hand interaction");
            break;
        case PlayerBodyPartType.Torso:
            console.log("Torso interaction");
            break;
        case PlayerBodyPartType.Foot:
            console.log("Foot interaction");
            break;
    }
}

// Attach effects to specific body parts
function attachEffectToBodyPart(player: Player, part: PlayerBodyPartType) {
    const bodyPart = player.getBodyPart(part);
    if (bodyPart) {
        // Attach effect to specific body part
    }
}
```